import React from "react";

import { checkImage, docPath } from "../../../__tests__/setup";
import { importSkia, surface } from "../setup";
import { Atlas, Group, Rect } from "../../components";

describe("Atlas", () => {
  it("should read the RSXform properties", async () => {
    const result = await surface.eval((Skia) => {
      const transform = Skia.RSXform(1, 2, 3, 4);
      return [transform.scos, transform.ssin, transform.tx, transform.ty];
    });
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it("should draw the atlas using the imperative API", async () => {
    const img = await surface.drawOffscreen((Skia, canvas) => {
      const size = 200;
      const texSurface = Skia.Surface.MakeOffscreen(size, size)!;
      const texCanvas = texSurface.getCanvas();
      texCanvas.drawColor(Skia.Color("red"));
      const tex = texSurface.makeImageSnapshot();
      const srcs = [
        Skia.XYWHRect(0, 0, size, size),
        Skia.XYWHRect(0, 0, size, size),
      ];
      const dsts = [Skia.RSXform(0.5, 0, 0, 0), Skia.RSXform(0, 0.5, 200, 100)];
      const paint = Skia.Paint();
      canvas.drawAtlas(tex, srcs, dsts, paint);
    });
    checkImage(img, "snapshots/atlas/simple.png");
  });
  it("should accept RSXform as JS", async () => {
    const img = await surface.drawOffscreen((Skia, canvas) => {
      const size = 200;
      const texSurface = Skia.Surface.MakeOffscreen(size, size)!;
      const texCanvas = texSurface.getCanvas();
      texCanvas.drawColor(Skia.Color("red"));
      const tex = texSurface.makeImageSnapshot();
      const srcs = [
        Skia.XYWHRect(0, 0, size, size),
        Skia.XYWHRect(0, 0, size, size),
      ];
      const dsts = [Skia.RSXform(0.5, 0, 0, 0), Skia.RSXform(0, 0.5, 200, 100)];
      const paint = Skia.Paint();
      canvas.drawAtlas(tex, srcs, dsts, paint);
    });
    checkImage(img, "snapshots/atlas/simple.png");
  });
  it("Simple Atlas", async () => {
    const { Skia } = importSkia();
    const size = 75;
    const texSurface = Skia.Surface.MakeOffscreen(size, size)!;
    const texCanvas = texSurface.getCanvas();
    texCanvas.drawColor(Skia.Color("red"));
    const image = texSurface.makeImageSnapshot();
    const img = await surface.draw(
      <Atlas
        image={image}
        sprites={[
          Skia.XYWHRect(0, 0, size, size),
          Skia.XYWHRect(0, 0, size, size),
        ]}
        transforms={[Skia.RSXform(0.5, 0, 0, 0), Skia.RSXform(0, 0.5, 50, 50)]}
      />
    );
    checkImage(img, "snapshots/atlas/simple2.png");
  });
  it("Simple Atlas identity", async () => {
    const { Skia } = importSkia();
    const size = 75;
    const texSurface = Skia.Surface.MakeOffscreen(size, size)!;
    const texCanvas = texSurface.getCanvas();
    texCanvas.drawColor(Skia.Color("red"));
    const image = texSurface.makeImageSnapshot();
    const img = await surface.draw(
      <Atlas
        image={image}
        sprites={[
          Skia.XYWHRect(0, 0, size, size),
          Skia.XYWHRect(0, 0, size, size),
        ]}
        transforms={[Skia.RSXform(1, 0, 0, 0), Skia.RSXform(1, 0, 0, 0)]}
      />
    );
    checkImage(img, "snapshots/atlas/identity.png");
  });
  it("Atlas documentation example", async () => {
    const { Skia, rect, drawAsImage } = importSkia();
    const size = { width: 25, height: 25 * 0.45 };
    const strokeWidth = 2;
    const textureSize = {
      width: size.width + strokeWidth,
      height: size.height + strokeWidth,
    };
    const texture = drawAsImage(
      <Group>
        <Rect
          rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
          color="cyan"
        />
        <Rect
          rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
          color="blue"
          style="stroke"
          strokeWidth={strokeWidth}
        />
      </Group>,
      textureSize
    );
    const numberOfBoxes = 150;
    const pos = { x: 128, y: 128 };
    const width = 256;
    const sprites = new Array(numberOfBoxes)
      .fill(0)
      .map(() => rect(0, 0, textureSize.width, textureSize.height));
    const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
      const tx = 5 + ((i * size.width) % width);
      const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
      const r = Math.atan2(pos.y - ty, pos.x - tx);
      return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
    });

    const img = await surface.draw(
      <Atlas image={texture} sprites={sprites} transforms={transforms} />
    );
    checkImage(img, docPath("atlas/hello-world.png"));
  });
  it("should use the colors property properly", async () => {
    const { Skia, rect, drawAsImage } = importSkia();
    const size = { width: 25, height: 25 * 0.45 };
    const strokeWidth = 2;
    const textureSize = {
      width: size.width + strokeWidth,
      height: size.height + strokeWidth,
    };
    const texture = drawAsImage(
      <Group>
        <Rect
          rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
          color="black"
        />
      </Group>,
      textureSize
    );
    const numberOfBoxes = 150;
    const pos = { x: 128, y: 128 };
    const width = 256;
    const sprites = new Array(numberOfBoxes)
      .fill(0)
      .map(() => rect(0, 0, textureSize.width, textureSize.height));
    const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
      const tx = 5 + ((i * size.width) % width);
      const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
      const r = Math.atan2(pos.y - ty, pos.x - tx);
      return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
    });
    class SeededRandom {
      private seed: number;

      constructor(seed: number) {
        this.seed = seed;
      }

      // Linear Congruential Generator
      next(): number {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
      }
    }

    function generateSeededRandomColor(seed: number): string {
      const random = new SeededRandom(seed);

      const red = Math.floor(random.next() * 256);
      const green = Math.floor(random.next() * 256);
      const blue = Math.floor(random.next() * 256);

      const redHex = red.toString(16).padStart(2, "0");
      const greenHex = green.toString(16).padStart(2, "0");
      const blueHex = blue.toString(16).padStart(2, "0");

      return `#${redHex}${greenHex}${blueHex}`;
    }

    const colors = new Array(numberOfBoxes)
      .fill(0)
      .map((_, i) => Skia.Color(generateSeededRandomColor(i)));
    const img = await surface.draw(
      <Atlas
        image={texture}
        sprites={sprites}
        transforms={transforms}
        colors={colors}
      />
    );
    checkImage(img, docPath("atlas/colors.png"), { overwrite: true });
  });
  it("should use the colors and blend mode property properly", async () => {
    const { Skia, rect, drawAsImage } = importSkia();
    const size = { width: 25, height: 25 * 0.45 };
    const strokeWidth = 2;
    const textureSize = {
      width: size.width + strokeWidth,
      height: size.height + strokeWidth,
    };
    const texture = drawAsImage(
      <Group>
        <Rect
          rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
          color="rgb(36,43,56)"
        />
      </Group>,
      textureSize
    );
    const numberOfBoxes = 150;
    const pos = { x: 128, y: 128 };
    const width = 256;
    const sprites = new Array(numberOfBoxes)
      .fill(0)
      .map(() => rect(0, 0, textureSize.width, textureSize.height));
    const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
      const tx = 5 + ((i * size.width) % width);
      const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
      const r = Math.atan2(pos.y - ty, pos.x - tx);
      return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
    });
    const colors = new Array(numberOfBoxes)
      .fill(0)
      .map(() => Skia.Color("#61bea2"));
    const img = await surface.draw(
      <Atlas
        image={texture}
        sprites={sprites}
        transforms={transforms}
        colors={colors}
        blendMode="screen"
      />
    );
    checkImage(img, docPath("atlas/colors-and-blend-mode.png"), {
      overwrite: true,
    });
  });
});
