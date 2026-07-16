import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LevelLoadListener$Stage extends Enum<LevelLoadListener$Stage> {
    static LOAD_INITIAL_CHUNKS: LevelLoadListener$Stage;
    static LOAD_PLAYER_CHUNKS: LevelLoadListener$Stage;
    static PREPARE_GLOBAL_SPAWN: LevelLoadListener$Stage;
    static START_SERVER: LevelLoadListener$Stage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LevelLoadListener$Stage;
    static values(): LevelLoadListener$Stage[];
    private constructor()
    name(): "START_SERVER" | "PREPARE_GLOBAL_SPAWN" | "LOAD_INITIAL_CHUNKS" | "LOAD_PLAYER_CHUNKS";
}