import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class CommandLine$Range extends Object implements Comparable<CommandLine$Range> {
    static defaultArity(paramtype: Class<Object>): CommandLine$Range;
    static defaultArity(paramfield: Field): CommandLine$Range;
    static optionArity(paramfield: Field): CommandLine$Range;
    static parameterArity(paramfield: Field): CommandLine$Range;
    static parameterIndex(paramfield: Field): CommandLine$Range;
    static valueOf(paramrange: string): CommandLine$Range;
    constructor(min: number, max: number, variable: boolean, unspecified: boolean, originalValue: string)
    // private isUnspecified: boolean;
    isVariable: boolean;
    // private originalValue: string;
    compareTo(other: CommandLine$Range): number;
    contains(value: number): boolean;
    equals(object: Object | null): boolean;
    hashCode(): number;
    max(newMax: number): CommandLine$Range;
    min(newMin: number): CommandLine$Range;
    // private size(): number;
    toString(): string;
}