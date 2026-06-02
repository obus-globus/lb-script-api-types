import type { BodyType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/BodyType.d.ts'
import type { DialogBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlainMessageBody extends Object implements DialogBody {
    constructor(arg0: TextComponent)
    constructor(arg0: TextComponent, arg1: number)
    readonly contents: TextComponent;
    readonly type: BodyType;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getContents(): TextComponent;
    getType(): BodyType;
    getWidth(): number;
    hashCode(): number;
    setContents(arg0: TextComponent): void;
    setWidth(arg0: number): void;
    toString(): string;
}