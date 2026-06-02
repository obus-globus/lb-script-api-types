import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class AdvancementRequirements extends Record {
    static CODEC: Codec<AdvancementRequirements>;
    static EMPTY: AdvancementRequirements;
    static allOf(paramcriteria: E[]): AdvancementRequirements;
    static anyOf(paramcriteria: E[]): AdvancementRequirements;
    constructor(requirements: string[][])
    constructor(input: FriendlyByteBuf)
    // private requirements: string[][];
    count(predicate: (param0: string) => kotlin.Boolean): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    names(): string[];
    requirements(): string[][];
    size(): number;
    test(predicate: (param0: string) => kotlin.Boolean): boolean;
    toString(): string;
    validate(expectedCriteria: string[]): DataResult<AdvancementRequirements>;
    write(output: FriendlyByteBuf): void;
}