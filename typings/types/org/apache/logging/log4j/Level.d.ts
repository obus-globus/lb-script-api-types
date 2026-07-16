import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StandardLevel } from '../../../../org/apache/logging/log4j/spi/StandardLevel.d.ts'
export class Level extends Object implements Serializable, Comparable<Level> {
    static ALL: Level;
    static CATEGORY: string;
    static DEBUG: Level;
    static ERROR: Level;
    static FATAL: Level;
    static INFO: Level;
    static OFF: Level;
    static TRACE: Level;
    static WARN: Level;
    static forName(paramname: string, paramintValue: number): Level;
    static getLevel(paramname: string): Level;
    static toLevel(paramlevel: string): Level;
    static toLevel(paramname: string, paramdefaultLevel: Level): Level;
    static valueOf<T extends Enum<T>>(paramenumType: Class<T>, paramname: string): T;
    static valueOf(paramname: string): Level;
    static values(): Level[];
    private constructor(name: string, intLevel: number)
    // private intLevel: number;
    // private name: string;
    readonly standardLevel: StandardLevel;
    clone(): Level;
    compareTo(other: Level): number;
    equals(other: Object | null): boolean;
    getDeclaringClass(): Class<Level>;
    getStandardLevel(): StandardLevel;
    hashCode(): number;
    intLevel(): number;
    isInRange(minLevel: Level, maxLevel: Level): boolean;
    isLessSpecificThan(level: Level): boolean;
    isMoreSpecificThan(level: Level): boolean;
    name(): string;
    // private readResolve(): Object;
    toString(): string;
}