import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { LocationInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LocationInfo.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
export class NoLookupLocation extends Enum<NoLookupLocation> implements LookupLocation {
    static FOR_ALREADY_TRACKED: NoLookupLocation;
    static FOR_DEFAULT_IMPORTS: NoLookupLocation;
    static FOR_NON_TRACKED_SCOPE: NoLookupLocation;
    static FOR_SCRIPT: NoLookupLocation;
    static FROM_BACKEND: NoLookupLocation;
    static FROM_BUILTINS: NoLookupLocation;
    static FROM_DESERIALIZATION: NoLookupLocation;
    static FROM_IDE: NoLookupLocation;
    static FROM_JAVA_LOADER: NoLookupLocation;
    static FROM_REFLECTION: NoLookupLocation;
    static FROM_SYNTHETIC_SCOPE: NoLookupLocation;
    static FROM_TEST: NoLookupLocation;
    static WHEN_CHECK_DECLARATION_CONFLICTS: NoLookupLocation;
    static WHEN_CHECK_OVERRIDES: NoLookupLocation;
    static WHEN_FIND_BY_FQNAME: NoLookupLocation;
    static WHEN_GET_ALL_DESCRIPTORS: NoLookupLocation;
    static WHEN_GET_COMPANION_OBJECT: NoLookupLocation;
    static WHEN_GET_DECLARATION_SCOPE: NoLookupLocation;
    static WHEN_GET_LOCAL_VARIABLE: NoLookupLocation;
    static WHEN_GET_SUPER_MEMBERS: NoLookupLocation;
    static WHEN_RESOLVE_DECLARATION: NoLookupLocation;
    static WHEN_RESOLVING_DEFAULT_TYPE_ARGUMENTS: NoLookupLocation;
    static WHEN_TYPING: NoLookupLocation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NoLookupLocation;
    static values(): (Object | null)[];
    private constructor()
    getLocation(): LocationInfo;
    name(): "FROM_IDE" | "FROM_BACKEND" | "FROM_TEST" | "FROM_BUILTINS" | "WHEN_CHECK_DECLARATION_CONFLICTS" | "WHEN_CHECK_OVERRIDES" | "FOR_SCRIPT" | "FROM_REFLECTION" | "WHEN_RESOLVE_DECLARATION" | "WHEN_GET_DECLARATION_SCOPE" | "WHEN_RESOLVING_DEFAULT_TYPE_ARGUMENTS" | "FOR_ALREADY_TRACKED" | "WHEN_GET_ALL_DESCRIPTORS" | "WHEN_TYPING" | "WHEN_GET_SUPER_MEMBERS" | "FOR_NON_TRACKED_SCOPE" | "FROM_SYNTHETIC_SCOPE" | "FROM_DESERIALIZATION" | "FROM_JAVA_LOADER" | "WHEN_GET_LOCAL_VARIABLE" | "WHEN_FIND_BY_FQNAME" | "WHEN_GET_COMPANION_OBJECT" | "FOR_DEFAULT_IMPORTS";
}