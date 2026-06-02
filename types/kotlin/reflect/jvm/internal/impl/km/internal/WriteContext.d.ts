import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MetadataExtensions } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/MetadataExtensions.d.ts'
import type { MutableVersionRequirementTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/serialization/MutableVersionRequirementTable.d.ts'
import type { StringTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/serialization/StringTable.d.ts'
export class WriteContext extends Object {
    // private extensions: MetadataExtensions[];
    readonly strings: StringTable;
    // private versionRequirements: MutableVersionRequirementTable;
    get(arg0: string): number;
    getClassName$kotlin_metadata(arg0: string): number;
    getExtensions$kotlin_metadata(): MetadataExtensions[];
    getStrings(): StringTable;
    getVersionRequirements$kotlin_metadata(): MutableVersionRequirementTable;
}