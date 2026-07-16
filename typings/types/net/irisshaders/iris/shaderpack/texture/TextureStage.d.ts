import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TextureStage extends Enum<TextureStage> {
    static BEGIN: TextureStage;
    static COMPOSITE_AND_FINAL: TextureStage;
    static DEFERRED: TextureStage;
    static GBUFFERS_AND_SHADOW: TextureStage;
    static PREPARE: TextureStage;
    static SETUP: TextureStage;
    static SHADOWCOMP: TextureStage;
    static parse(paramarg0: string): Optional<TextureStage>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextureStage;
    static values(): TextureStage[];
    private constructor()
    name(): "SETUP" | "BEGIN" | "SHADOWCOMP" | "PREPARE" | "GBUFFERS_AND_SHADOW" | "DEFERRED" | "COMPOSITE_AND_FINAL";
}