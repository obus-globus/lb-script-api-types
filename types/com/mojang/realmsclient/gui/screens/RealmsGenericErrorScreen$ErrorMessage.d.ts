import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsGenericErrorScreen$ErrorMessage extends Record {
    private constructor(title: Component, detail: Component)
    // private detail: Component;
    // private title: Component;
    detail(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    title(): Component;
    toString(): string;
}