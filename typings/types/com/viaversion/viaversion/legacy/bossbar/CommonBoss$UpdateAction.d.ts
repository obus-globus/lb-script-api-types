import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CommonBoss$UpdateAction extends Enum<CommonBoss$UpdateAction> {
    static ADD: CommonBoss$UpdateAction;
    static REMOVE: CommonBoss$UpdateAction;
    static UPDATE_FLAGS: CommonBoss$UpdateAction;
    static UPDATE_HEALTH: CommonBoss$UpdateAction;
    static UPDATE_STYLE: CommonBoss$UpdateAction;
    static UPDATE_TITLE: CommonBoss$UpdateAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CommonBoss$UpdateAction;
    static values(): CommonBoss$UpdateAction[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "ADD" | "REMOVE" | "UPDATE_HEALTH" | "UPDATE_TITLE" | "UPDATE_STYLE" | "UPDATE_FLAGS";
}