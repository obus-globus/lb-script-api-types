import type { AfterAction } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/AfterAction.d.ts'
import type { DialogType } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/DialogType.d.ts'
import type { Input } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Input.d.ts'
import type { DialogBody } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { TextComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Dialog extends Object {
    constructor(arg0: DialogType, arg1: TextComponent, arg2: TextComponent, arg3: boolean, arg4: boolean, arg5: AfterAction, arg6: DialogBody[], arg7: Input[])
    readonly afterAction: AfterAction;
    readonly body: DialogBody[];
    readonly canCloseWithEscape: boolean;
    readonly externalTitle: TextComponent;
    readonly inputs: Input[];
    readonly pause: boolean;
    readonly title: TextComponent;
    readonly type: DialogType;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAfterAction(): AfterAction;
    getBody(): DialogBody[];
    getExternalTitle(): TextComponent;
    getInputs(): Input[];
    getTitle(): TextComponent;
    getType(): DialogType;
    hashCode(): number;
    isCanCloseWithEscape(): boolean;
    isPause(): boolean;
    setAfterAction(arg0: AfterAction): void;
    setBody(arg0: DialogBody[]): void;
    setCanCloseWithEscape(arg0: boolean): void;
    setExternalTitle(arg0: TextComponent): void;
    setInputs(arg0: Input[]): void;
    setPause(arg0: boolean): void;
    setTitle(arg0: TextComponent): void;
    toString(): string;
}