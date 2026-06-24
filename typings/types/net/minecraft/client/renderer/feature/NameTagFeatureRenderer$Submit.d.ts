import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class NameTagFeatureRenderer$Submit extends Record implements TranslucentSubmit {
    static computeDistanceToCameraSq(parampose: Matrix4fc): number;
    static computeDistanceToCameraSq(parampose: Matrix4fc, paramoriginX: number, paramoriginY: number, paramoriginZ: number): number;
    constructor(pose: Matrix4fc, x: number, y: number, text: Component, lightCoords: number, color: number, backgroundColor: number, displayMode: Font$DisplayMode)
    // private backgroundColor: number;
    // private color: number;
    // private displayMode: Font$DisplayMode;
    // private lightCoords: number;
    // private pose: Matrix4fc;
    // private text: Component;
    // private x: number;
    // private y: number;
    backgroundColor(): number;
    color(): number;
    displayMode(): Font$DisplayMode;
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<NameTagFeatureRenderer$Submit>;
    hashCode(): number;
    lightCoords(): number;
    pose(): Matrix4fc;
    text(): Component;
    toString(): string;
    x(): number;
    y(): number;
}