import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorSwingSource extends Enum<ActorSwingSource> {
    static Attack: ActorSwingSource;
    static Build: ActorSwingSource;
    static DropItem: ActorSwingSource;
    static Event: ActorSwingSource;
    static Interact: ActorSwingSource;
    static Mine: ActorSwingSource;
    static None: ActorSwingSource;
    static ThrowItem: ActorSwingSource;
    static UseItem: ActorSwingSource;
    static getByName(paramarg0: string): ActorSwingSource;
    static getByName(paramarg0: string, paramarg1: ActorSwingSource): ActorSwingSource;
    static getByValue(paramarg0: number): ActorSwingSource;
    static getByValue(paramarg0: number, paramarg1: ActorSwingSource): ActorSwingSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ActorSwingSource;
    static values(): ActorSwingSource[];
    private constructor(arg2: number)
    private constructor(arg2: ActorSwingSource)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Build" | "Mine" | "Interact" | "Attack" | "UseItem" | "ThrowItem" | "DropItem" | "Event";
}