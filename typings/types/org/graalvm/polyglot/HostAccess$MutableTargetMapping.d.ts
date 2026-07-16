import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class HostAccess$MutableTargetMapping extends Enum<HostAccess$MutableTargetMapping> {
    static ARRAY_TO_JAVA_LIST: HostAccess$MutableTargetMapping;
    static EXECUTABLE_TO_JAVA_INTERFACE: HostAccess$MutableTargetMapping;
    static HASH_TO_JAVA_MAP: HostAccess$MutableTargetMapping;
    static ITERABLE_TO_JAVA_ITERABLE: HostAccess$MutableTargetMapping;
    static ITERATOR_TO_JAVA_ITERATOR: HostAccess$MutableTargetMapping;
    static MEMBERS_TO_JAVA_INTERFACE: HostAccess$MutableTargetMapping;
    static MEMBERS_TO_JAVA_MAP: HostAccess$MutableTargetMapping;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HostAccess$MutableTargetMapping;
    static values(): HostAccess$MutableTargetMapping[];
    private constructor()
    name(): "ARRAY_TO_JAVA_LIST" | "ITERATOR_TO_JAVA_ITERATOR" | "ITERABLE_TO_JAVA_ITERABLE" | "HASH_TO_JAVA_MAP" | "MEMBERS_TO_JAVA_MAP" | "MEMBERS_TO_JAVA_INTERFACE" | "EXECUTABLE_TO_JAVA_INTERFACE";
}