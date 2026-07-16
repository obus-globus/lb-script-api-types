import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorLinkType extends Enum<ActorLinkType> {
    static None: ActorLinkType;
    static Passenger: ActorLinkType;
    static Riding: ActorLinkType;
    static getByName(paramarg0: string): ActorLinkType;
    static getByName(paramarg0: string, paramarg1: ActorLinkType): ActorLinkType;
    static getByValue(paramarg0: number): ActorLinkType;
    static getByValue(paramarg0: number, paramarg1: ActorLinkType): ActorLinkType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ActorLinkType;
    static values(): ActorLinkType[];
    private constructor(arg2: number)
    private constructor(arg2: ActorLinkType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Riding" | "Passenger";
}