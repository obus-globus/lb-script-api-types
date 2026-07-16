import type { InputConstants$Key } from '../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class InputConstants$Type extends Enum<InputConstants$Type> {
    static KEYSYM: InputConstants$Type;
    static MOUSE: InputConstants$Type;
    static SCANCODE: InputConstants$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InputConstants$Type;
    static values(): InputConstants$Type[];
    private constructor(defaultPrefix: string, displayTextSupplier: (param0: number, param1: string) => Component)
    // private defaultPrefix: string;
    // private displayTextSupplier: (param0: number, param1: string) => Component;
    map: { [key: string]: any };
    getOrCreate(value: number): InputConstants$Key;
    name(): "KEYSYM" | "SCANCODE" | "MOUSE";
}