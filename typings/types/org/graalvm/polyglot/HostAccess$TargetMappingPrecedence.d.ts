import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class HostAccess$TargetMappingPrecedence extends Enum<HostAccess$TargetMappingPrecedence> {
    static HIGH: HostAccess$TargetMappingPrecedence;
    static HIGHEST: HostAccess$TargetMappingPrecedence;
    static LOW: HostAccess$TargetMappingPrecedence;
    static LOWEST: HostAccess$TargetMappingPrecedence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HostAccess$TargetMappingPrecedence;
    static values(): HostAccess$TargetMappingPrecedence[];
    private constructor()
    name(): "HIGHEST" | "HIGH" | "LOW" | "LOWEST";
}