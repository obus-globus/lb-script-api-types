import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { Font$DisplayMode } from '../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class SubmitNodeStorage$TextSubmit extends Record implements ModelStorage {
    // private backgroundColor: number;
    // private beId: number;
    // private color: number;
    // private displayMode: Font$DisplayMode;
    // private dropShadow: boolean;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private outlineColor: number;
    // private pose: Matrix4fc;
    // private string: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private x: number;
    // private y: number;
    backgroundColor(): number;
    color(): number;
    displayMode(): Font$DisplayMode;
    dropShadow(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    outlineColor(): number;
    pose(): Matrix4fc;
    string(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    toString(): string;
    x(): number;
    y(): number;
}