import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { FeatureSet } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSet.d.ts'
import type { FeatureSetBuilder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/format/FeatureSetBuilder.d.ts'
export class MappingFormat extends Enum<MappingFormat> {
    static CSRG_FILE: MappingFormat;
    static ENIGMA_DIR: MappingFormat;
    static ENIGMA_FILE: MappingFormat;
    static INTELLIJ_MIGRATION_MAP_FILE: MappingFormat;
    static JAM_FILE: MappingFormat;
    static JOBF_FILE: MappingFormat;
    static PROGUARD_FILE: MappingFormat;
    static RECAF_SIMPLE_FILE: MappingFormat;
    static SRG_FILE: MappingFormat;
    static TINY_2_FILE: MappingFormat;
    static TINY_FILE: MappingFormat;
    static TSRG_2_FILE: MappingFormat;
    static TSRG_FILE: MappingFormat;
    static XSRG_FILE: MappingFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MappingFormat;
    static values(): MappingFormat[];
    private constructor(arg2: string, arg3: string, arg4: boolean, arg5: FeatureSetBuilder)
    // private features: FeatureSet;
    fileExt: string;
    hasFieldDescriptors: boolean;
    hasNamespaces: boolean;
    hasWriter: boolean;
    name: string;
    supportsArgs: boolean;
    supportsComments: boolean;
    supportsLocals: boolean;
    features(): FeatureSet;
    hasSingleFile(): boolean;
}