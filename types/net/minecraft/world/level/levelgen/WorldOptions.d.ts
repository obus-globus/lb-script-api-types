import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorldOptions extends Object {
    static CODEC: MapCodec<WorldOptions>;
    static DEMO_OPTIONS: WorldOptions;
    static defaultWithRandomSeed(): WorldOptions;
    static parseSeed(paramseedString: string): OptionalLong;
    static randomSeed(): number;
    static testWorldWithRandomSeed(): WorldOptions;
    constructor(seed: number, generateStructures: boolean, generateBonusChest: boolean)
    private constructor(seed: number, generateStructures: boolean, generateBonusChest: boolean, legacyCustomOptions: Optional<string>)
    // private generateBonusChest: boolean;
    // private generateStructures: boolean;
    // private legacyCustomOptions: Optional<string>;
    // private seed: number;
    generateBonusChest(): boolean;
    generateStructures(): boolean;
    isOldCustomizedWorld(): boolean;
    seed(): number;
    withBonusChest(generateBonusChest: boolean): WorldOptions;
    withSeed(seed: OptionalLong): WorldOptions;
    withStructures(generateStructures: boolean): WorldOptions;
}