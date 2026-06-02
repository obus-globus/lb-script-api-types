import type { SerializedData } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/SerializedData.d.ts'
import type { BodyType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/BodyType.d.ts'
import type { DialogBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { PlainMessageBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/PlainMessageBody.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ItemBody extends Object implements DialogBody {
    constructor(arg0: SerializedData<Object>)
    constructor(arg0: SerializedData<Object>, arg1: PlainMessageBody, arg2: boolean, arg3: boolean, arg4: number, arg5: number)
    readonly description: PlainMessageBody;
    readonly height: number;
    readonly item: SerializedData<Object>;
    readonly showDecorations: boolean;
    readonly showTooltip: boolean;
    readonly type: BodyType;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getDescription(): PlainMessageBody;
    getHeight(): number;
    getItem(): SerializedData<Object>;
    getType(): BodyType;
    getWidth(): number;
    hashCode(): number;
    isShowDecorations(): boolean;
    isShowTooltip(): boolean;
    setDescription(arg0: PlainMessageBody): void;
    setHeight(arg0: number): void;
    setItem(arg0: SerializedData<Object>): void;
    setShowDecorations(arg0: boolean): void;
    setShowTooltip(arg0: boolean): void;
    setWidth(arg0: number): void;
    toString(): string;
}