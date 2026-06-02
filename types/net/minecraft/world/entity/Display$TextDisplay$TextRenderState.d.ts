import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Display$IntInterpolator } from '../../../../net/minecraft/world/entity/Display$IntInterpolator.d.ts'
export class Display$TextDisplay$TextRenderState extends Record {
    // private backgroundColor: (param0: number) => kotlin.Int;
    // private flags: number;
    // private lineWidth: number;
    // private text: Component;
    // private textOpacity: (param0: number) => kotlin.Int;
    backgroundColor(): (param0: number) => kotlin.Int;
    equals(o: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    lineWidth(): number;
    text(): Component;
    textOpacity(): (param0: number) => kotlin.Int;
    toString(): string;
}