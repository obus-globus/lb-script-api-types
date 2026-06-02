import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class NarrationThunk<T extends Object | number | string | boolean> extends Object {
    static EMPTY: NarrationThunk<Object>;
    static from(paramtext: string): NarrationThunk<Object>;
    static from(paramlines: Component[]): NarrationThunk<Object>;
    static from(paramtext: Component): NarrationThunk<Object>;
    private constructor(contents: T, converter: (param0: (param0: string) => void, param1: T) => void)
    // private contents: T;
    // private converter: (param0: (param0: string) => void, param1: T) => void;
    equals(o: Object | null): boolean;
    getText(output: (param0: string) => void): void;
    hashCode(): number;
}