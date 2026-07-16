import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { NbtDataSource } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/nbt/NbtDataSource.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextCodecs_v1_20_3$NbtDataSourceType extends Enum<TextCodecs_v1_20_3$NbtDataSourceType> implements NamedType {
    static BLOCK: TextCodecs_v1_20_3$NbtDataSourceType;
    static ENTITY: TextCodecs_v1_20_3$NbtDataSourceType;
    static STORAGE: TextCodecs_v1_20_3$NbtDataSourceType;
    static forDataSource(paramarg0: NbtDataSource): TextCodecs_v1_20_3$NbtDataSourceType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextCodecs_v1_20_3$NbtDataSourceType;
    static values(): TextCodecs_v1_20_3$NbtDataSourceType[];
    private constructor(arg2: string, arg3: MapCodec<NbtDataSource>)
    readonly codec: MapCodec<NbtDataSource>;
    getCodec(): MapCodec<NbtDataSource>;
    getName(): string;
    name(): "ENTITY" | "BLOCK" | "STORAGE";
}