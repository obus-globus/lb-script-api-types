import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerInfoUpdateAction extends Enum<PlayerInfoUpdateAction> {
    static ADD_PLAYER: PlayerInfoUpdateAction;
    static INITIALIZE_CHAT: PlayerInfoUpdateAction;
    static UPDATE_DISPLAY_NAME: PlayerInfoUpdateAction;
    static UPDATE_GAME_MODE: PlayerInfoUpdateAction;
    static UPDATE_HAT: PlayerInfoUpdateAction;
    static UPDATE_LATENCY: PlayerInfoUpdateAction;
    static UPDATE_LISTED: PlayerInfoUpdateAction;
    static UPDATE_LIST_ORDER: PlayerInfoUpdateAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerInfoUpdateAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADD_PLAYER" | "INITIALIZE_CHAT" | "UPDATE_GAME_MODE" | "UPDATE_LISTED" | "UPDATE_LATENCY" | "UPDATE_DISPLAY_NAME" | "UPDATE_LIST_ORDER" | "UPDATE_HAT";
}