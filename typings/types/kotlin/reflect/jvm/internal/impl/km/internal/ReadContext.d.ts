import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MetadataExtensions } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/MetadataExtensions.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { VersionRequirementTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
export class ReadContext extends Object {
    constructor(arg0: NameResolver, arg1: TypeTable, arg2: VersionRequirementTable, arg3: boolean, arg4: ReadContext, arg5: (Object | null)[])
    // private contextExtensions: Object[];
    // private extensions: MetadataExtensions[];
    // private ignoreUnknownVersionRequirements: boolean;
    // private parent: ReadContext;
    readonly strings: NameResolver;
    // private typeParameterNameToId: { [key: number]: number };
    readonly types: TypeTable;
    // private versionRequirements: VersionRequirementTable;
    className$kotlin_metadata(arg0: number): string;
    get(arg0: number): string;
    getExtensions$kotlin_metadata(): MetadataExtensions[];
    getIgnoreUnknownVersionRequirements$kotlin_metadata(): boolean;
    getStrings(): NameResolver;
    getTypeParameterId$kotlin_metadata(arg0: number): number;
    getTypes(): TypeTable;
    getVersionRequirements$kotlin_metadata(): VersionRequirementTable;
    withTypeParameters$kotlin_metadata(arg0: ProtoBuf$TypeParameter[]): ReadContext;
}