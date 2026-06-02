import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { DialogAction } from '../../../../net/minecraft/server/dialog/DialogAction.d.ts'
import type { Input } from '../../../../net/minecraft/server/dialog/Input.d.ts'
import type { DialogBody } from '../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
export class CommonDialogData extends Record {
    static MAP_CODEC: MapCodec<CommonDialogData>;
    // private afterAction: DialogAction;
    // private body: DialogBody[];
    // private canCloseWithEscape: boolean;
    // private externalTitle: Optional<Component>;
    // private inputs: Input[];
    // private pause: boolean;
    // private title: Component;
    afterAction(): DialogAction;
    body(): DialogBody[];
    canCloseWithEscape(): boolean;
    computeExternalTitle(): Component;
    equals(o: Object | null): boolean;
    externalTitle(): Optional<Component>;
    hashCode(): number;
    inputs(): Input[];
    pause(): boolean;
    title(): Component;
    toString(): string;
}