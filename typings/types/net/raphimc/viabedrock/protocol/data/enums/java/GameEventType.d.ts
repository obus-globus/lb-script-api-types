import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GameEventType extends Enum<GameEventType> {
    static ARROW_HIT_PLAYER: GameEventType;
    static CHANGE_GAME_MODE: GameEventType;
    static DEMO_EVENT: GameEventType;
    static GUARDIAN_ELDER_EFFECT: GameEventType;
    static IMMEDIATE_RESPAWN: GameEventType;
    static LEVEL_CHUNKS_LOAD_START: GameEventType;
    static LIMITED_CRAFTING: GameEventType;
    static NO_RESPAWN_BLOCK_AVAILABLE: GameEventType;
    static PUFFER_FISH_STING: GameEventType;
    static RAIN_LEVEL_CHANGE: GameEventType;
    static START_RAINING: GameEventType;
    static STOP_RAINING: GameEventType;
    static THUNDER_LEVEL_CHANGE: GameEventType;
    static WIN_GAME: GameEventType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GameEventType;
    static values(): GameEventType[];
    private constructor()
    name(): "NO_RESPAWN_BLOCK_AVAILABLE" | "START_RAINING" | "STOP_RAINING" | "CHANGE_GAME_MODE" | "WIN_GAME" | "DEMO_EVENT" | "ARROW_HIT_PLAYER" | "RAIN_LEVEL_CHANGE" | "THUNDER_LEVEL_CHANGE" | "PUFFER_FISH_STING" | "GUARDIAN_ELDER_EFFECT" | "IMMEDIATE_RESPAWN" | "LIMITED_CRAFTING" | "LEVEL_CHUNKS_LOAD_START";
}