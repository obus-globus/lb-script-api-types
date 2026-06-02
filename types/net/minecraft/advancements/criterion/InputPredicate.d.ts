import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
export class InputPredicate extends Record {
    static CODEC: Codec<InputPredicate>;
    constructor(forward: Optional<boolean>, backward: Optional<boolean>, left: Optional<boolean>, right: Optional<boolean>, jump: Optional<boolean>, sneak: Optional<boolean>, sprint: Optional<boolean>)
    // private backward: Optional<boolean>;
    // private forward: Optional<boolean>;
    // private jump: Optional<boolean>;
    // private left: Optional<boolean>;
    // private right: Optional<boolean>;
    // private sneak: Optional<boolean>;
    // private sprint: Optional<boolean>;
    backward(): Optional<boolean>;
    equals(o: Object | null): boolean;
    forward(): Optional<boolean>;
    hashCode(): number;
    jump(): Optional<boolean>;
    left(): Optional<boolean>;
    // private matches(match: Optional<boolean>, value: boolean): boolean;
    matches(input: Input): boolean;
    right(): Optional<boolean>;
    sneak(): Optional<boolean>;
    sprint(): Optional<boolean>;
    toString(): string;
}