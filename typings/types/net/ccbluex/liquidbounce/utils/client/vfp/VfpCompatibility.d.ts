import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ClientProtocolVersion } from '../../../../../../net/ccbluex/liquidbounce/utils/client/ClientProtocolVersion.d.ts'
export class VfpCompatibility extends Enum<VfpCompatibility> {
    static INSTANCE: VfpCompatibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VfpCompatibility;
    static values(): VfpCompatibility[];
    private constructor()
    isEqual1_21_4(): boolean;
    isEqual1_8(): boolean;
    isNewerThanOrEqual1_16(): boolean;
    isNewerThanOrEqual1_21_5(): boolean;
    isNewerThanOrEqual1_21_6(): boolean;
    isNewerThanOrEqual1_21_9(): boolean;
    isOlderThanOrEqual1_11_1(): boolean;
    isOlderThanOrEqual1_12_2(): boolean;
    isOlderThanOrEqual1_15_2(): boolean;
    isOlderThanOrEqual1_21_11(): boolean;
    isOlderThanOrEqual1_7_10(): boolean;
    isOlderThanOrEqual1_8(): boolean;
    unsafeGetProtocolVersion(): ClientProtocolVersion;
    unsafeGetProtocolVersions(): ClientProtocolVersion[];
    unsafeOpenVfpProtocolSelection(): void;
    unsafeSelectProtocolVersion(arg0: number): void;
    name(): "INSTANCE";
}