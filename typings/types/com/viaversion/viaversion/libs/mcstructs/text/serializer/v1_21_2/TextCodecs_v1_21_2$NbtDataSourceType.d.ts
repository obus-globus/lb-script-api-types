import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { NbtDataSource } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/nbt/NbtDataSource.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextCodecs_v1_21_2$NbtDataSourceType extends Enum<TextCodecs_v1_21_2$NbtDataSourceType> implements NamedType {
    static BLOCK: TextCodecs_v1_21_2$NbtDataSourceType;
    static ENTITY: TextCodecs_v1_21_2$NbtDataSourceType;
    static STORAGE: TextCodecs_v1_21_2$NbtDataSourceType;
    static forDataSource(paramarg0: NbtDataSource): TextCodecs_v1_21_2$NbtDataSourceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TextCodecs_v1_21_2$NbtDataSourceType;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: MapCodec<NbtDataSource>)
    readonly codec: MapCodec<NbtDataSource>;
    getCodec(): MapCodec<NbtDataSource>;
    getName(): string;
    name(): "ENTITY" | "BLOCK" | "STORAGE";
}