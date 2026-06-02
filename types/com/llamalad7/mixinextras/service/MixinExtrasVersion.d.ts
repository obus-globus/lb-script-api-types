import type { Version } from '../../../../com/llamalad7/mixinextras/lib/semver/Version.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinExtrasVersion extends Enum<MixinExtrasVersion> {
    static LATEST: MixinExtrasVersion;
    static V0_2_0_BETA_1: MixinExtrasVersion;
    static V0_2_0_BETA_2: MixinExtrasVersion;
    static V0_2_0_BETA_3: MixinExtrasVersion;
    static V0_2_0_BETA_4: MixinExtrasVersion;
    static V0_2_0_BETA_5: MixinExtrasVersion;
    static V0_2_0_BETA_6: MixinExtrasVersion;
    static V0_2_0_BETA_7: MixinExtrasVersion;
    static V0_2_0_BETA_8: MixinExtrasVersion;
    static V0_2_0_BETA_9: MixinExtrasVersion;
    static V0_3_4: MixinExtrasVersion;
    static V0_4_0_BETA_1: MixinExtrasVersion;
    static V0_5_0_BETA_1: MixinExtrasVersion;
    static V0_5_4: MixinExtrasVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinExtrasVersion;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: number)
    // private prettyName: string;
    readonly semver: Version;
    // private versionNumber: number;
    getNumber(): number;
    getSemver(): Version;
    toString(): string;
    name(): "V0_2_0_BETA_1" | "V0_2_0_BETA_2" | "V0_2_0_BETA_3" | "V0_2_0_BETA_4" | "V0_2_0_BETA_5" | "V0_2_0_BETA_6" | "V0_2_0_BETA_7" | "V0_2_0_BETA_8" | "V0_2_0_BETA_9" | "V0_3_4" | "V0_4_0_BETA_1" | "V0_5_0_BETA_1" | "V0_5_4";
}