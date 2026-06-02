import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TestInput } from '../../../../../../net/fabricmc/fabric/api/client/gametest/v1/TestInput.d.ts'
import type { ClientGameTestContext } from '../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { KeyMapping } from '../../../../../../net/minecraft/client/KeyMapping.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
export class TestInputImpl extends Object implements TestInput {
    static isKeyDown(paramarg0: number): boolean;
    constructor(arg0: ClientGameTestContext)
    // private context: ClientGameTestContext;
    clearKeysDown(): void;
    holdAlt(): void;
    holdControl(): void;
    holdKey(arg0: InputConstants$Key): void;
    holdKey(arg0: (param0: Options) => KeyMapping): void;
    holdKey(arg0: number): void;
    holdKey(arg0: KeyMapping): void;
    holdKeyFor(arg0: InputConstants$Key, arg1: number): void;
    holdKeyFor(arg0: (param0: Options) => KeyMapping, arg1: number): void;
    holdKeyFor(arg0: number, arg1: number): void;
    holdKeyFor(arg0: KeyMapping, arg1: number): void;
    holdMouse(arg0: number): void;
    holdMouseFor(arg0: number, arg1: number): void;
    holdShift(): void;
    moveCursor(arg0: number, arg1: number): void;
    pressKey(arg0: InputConstants$Key): void;
    pressKey(arg0: (param0: Options) => KeyMapping): void;
    pressKey(arg0: number): void;
    pressKey(arg0: KeyMapping): void;
    pressMouse(arg0: number): void;
    releaseAlt(): void;
    releaseControl(): void;
    releaseKey(arg0: InputConstants$Key): void;
    releaseKey(arg0: (param0: Options) => KeyMapping): void;
    releaseKey(arg0: number): void;
    releaseKey(arg0: KeyMapping): void;
    releaseMouse(arg0: number): void;
    releaseShift(): void;
    resizeWindow(arg0: number, arg1: number): void;
    scroll(arg0: number): void;
    scroll(arg0: number, arg1: number): void;
    setCursorPos(arg0: number, arg1: number): void;
    typeChar(arg0: number): void;
    typeChars(arg0: string): void;
}