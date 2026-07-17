import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { LoggedChatEvent } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class LoggedChatEvent$Type extends Enum<LoggedChatEvent$Type> implements StringRepresentable {
    static PLAYER: LoggedChatEvent$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SYSTEM: LoggedChatEvent$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LoggedChatEvent$Type;
    static values(): LoggedChatEvent$Type[];
    private constructor(serializedName: string, codec: () => MapCodec<LoggedChatEvent>)
    // private codec: () => MapCodec<LoggedChatEvent>;
    readonly serializedName: string;
    // private codec(): MapCodec<LoggedChatEvent>;
    getSerializedName(): string;
    name(): "PLAYER" | "SYSTEM";
}