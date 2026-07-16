import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientCommandAction extends Enum<ClientCommandAction> {
    static PERFORM_RESPAWN: ClientCommandAction;
    static REQUEST_GAMERULE_VALUES: ClientCommandAction;
    static REQUEST_STATS: ClientCommandAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientCommandAction;
    static values(): ClientCommandAction[];
    private constructor()
    name(): "PERFORM_RESPAWN" | "REQUEST_STATS" | "REQUEST_GAMERULE_VALUES";
}