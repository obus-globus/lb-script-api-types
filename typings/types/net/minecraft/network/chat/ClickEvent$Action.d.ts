import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ClickEvent$Action extends Enum<ClickEvent$Action> implements StringRepresentable {
    static CHANGE_PAGE: ClickEvent$Action;
    static CODEC: Codec<ClickEvent$Action>;
    static COPY_TO_CLIPBOARD: ClickEvent$Action;
    static CUSTOM: ClickEvent$Action;
    static OPEN_FILE: ClickEvent$Action;
    static OPEN_URL: ClickEvent$Action;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RUN_COMMAND: ClickEvent$Action;
    static SHOW_DIALOG: ClickEvent$Action;
    static SUGGEST_COMMAND: ClickEvent$Action;
    static UNSAFE_CODEC: Codec<ClickEvent$Action>;
    static filterForSerialization(paramaction: ClickEvent$Action): DataResult<ClickEvent$Action>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClickEvent$Action;
    static values(): ClickEvent$Action[];
    private constructor(name: string, allowFromServer: boolean, codec: MapCodec<ClickEvent>)
    // private allowFromServer: boolean;
    // private codec: MapCodec<ClickEvent>;
    // private name: string;
    getSerializedName(): string;
    isAllowedFromServer(): boolean;
    valueCodec(): MapCodec<ClickEvent>;
    name(): "OPEN_URL" | "OPEN_FILE" | "RUN_COMMAND" | "SUGGEST_COMMAND" | "SHOW_DIALOG" | "CHANGE_PAGE" | "COPY_TO_CLIPBOARD" | "CUSTOM";
}