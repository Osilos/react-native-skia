import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Reanimated: any;

try {
  Reanimated = require("react-native-reanimated");
} catch (e) {
  // Ignore
}

export const HAS_REANIMATED = Reanimated !== undefined;

function throwOnMissingReanimated() {
  throw new Error(
    `Reanimated was not found.
Make sure react-native-reanimated package is installed if you want to use react-naitve-skia's integration layer API.`
  );
}

function isSharedValuePolyfill(value: any) {
  // polyfill that accepts shared values from Reanimated 3.0
  // ideally we should use a method exported by reanimated package
  // to be resistant to possible changes in the shared value object definition.
  return (
    value !== null &&
    typeof value === "object" &&
    value.modify !== undefined &&
    value.addListener !== undefined
  );
}

export const useSharedValue =
  Reanimated?.useSharedValue ||
  ((value: number) => useMemo(() => ({ value }), [value]));

export const startMapper = Reanimated?.startMapper || throwOnMissingReanimated;
export const stopMapper = Reanimated?.stopMapper || throwOnMissingReanimated;
export const runOnJS = Reanimated?.runOnJS || throwOnMissingReanimated;

export const isSharedValue = HAS_REANIMATED
  ? isSharedValuePolyfill
  : () => false;

export type SharedValueType<T = number> = {
  value: T;
};