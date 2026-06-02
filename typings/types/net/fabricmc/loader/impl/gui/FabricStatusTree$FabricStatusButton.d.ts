import type { DataInputStream } from '../../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricStatusTree$FabricBasicButtonType } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricBasicButtonType.d.ts'
export class FabricStatusTree$FabricStatusButton extends Object {
    constructor(arg0: DataInputStream)
    constructor(arg0: string, arg1: FabricStatusTree$FabricBasicButtonType)
    clipboard: string;
    shouldClose: boolean;
    shouldContinue: boolean;
    text: string;
    type: FabricStatusTree$FabricBasicButtonType;
    makeClose(): FabricStatusTree$FabricStatusButton;
    makeContinue(): FabricStatusTree$FabricStatusButton;
    withClipboard(arg0: string): FabricStatusTree$FabricStatusButton;
    writeTo(arg0: DataOutputStream): void;
}