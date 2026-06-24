import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GraphicsOverrideParameterType extends Enum<GraphicsOverrideParameterType> {
    static AmbientColor: GraphicsOverrideParameterType;
    static AmbientIlluminance: GraphicsOverrideParameterType;
    static CDOM: GraphicsOverrideParameterType;
    static Chlorophyll: GraphicsOverrideParameterType;
    static EmissiveDesaturation: GraphicsOverrideParameterType;
    static FlashColor: GraphicsOverrideParameterType;
    static FlashIlluminance: GraphicsOverrideParameterType;
    static HighlightsContrast: GraphicsOverrideParameterType;
    static HighlightsGain: GraphicsOverrideParameterType;
    static HighlightsGamma: GraphicsOverrideParameterType;
    static HighlightsMin: GraphicsOverrideParameterType;
    static HighlightsOffset: GraphicsOverrideParameterType;
    static HighlightsSaturation: GraphicsOverrideParameterType;
    static HorizonBlendMax: GraphicsOverrideParameterType;
    static HorizonBlendMieStart: GraphicsOverrideParameterType;
    static HorizonBlendMin: GraphicsOverrideParameterType;
    static HorizonBlendStart: GraphicsOverrideParameterType;
    static MidtonesContrast: GraphicsOverrideParameterType;
    static MidtonesGain: GraphicsOverrideParameterType;
    static MidtonesGamma: GraphicsOverrideParameterType;
    static MidtonesOffset: GraphicsOverrideParameterType;
    static MidtonesSaturation: GraphicsOverrideParameterType;
    static MoonColor: GraphicsOverrideParameterType;
    static MoonIlluminance: GraphicsOverrideParameterType;
    static MoonMieStrength: GraphicsOverrideParameterType;
    static OrbitalOffsetDegrees: GraphicsOverrideParameterType;
    static RayleighStrength: GraphicsOverrideParameterType;
    static ShadowsContrast: GraphicsOverrideParameterType;
    static ShadowsGain: GraphicsOverrideParameterType;
    static ShadowsGamma: GraphicsOverrideParameterType;
    static ShadowsMax: GraphicsOverrideParameterType;
    static ShadowsOffset: GraphicsOverrideParameterType;
    static ShadowsSaturation: GraphicsOverrideParameterType;
    static SkyHorizonColor: GraphicsOverrideParameterType;
    static SkyIntensity: GraphicsOverrideParameterType;
    static SkyZenithColor: GraphicsOverrideParameterType;
    static SunColor: GraphicsOverrideParameterType;
    static SunGlareShape: GraphicsOverrideParameterType;
    static SunIlluminance: GraphicsOverrideParameterType;
    static SunMieStrength: GraphicsOverrideParameterType;
    static SuspendedSediment: GraphicsOverrideParameterType;
    static Temperature: GraphicsOverrideParameterType;
    static WavesDepth: GraphicsOverrideParameterType;
    static WavesDirectionIncrement: GraphicsOverrideParameterType;
    static WavesFrequency: GraphicsOverrideParameterType;
    static WavesFrequencyScaling: GraphicsOverrideParameterType;
    static WavesMix: GraphicsOverrideParameterType;
    static WavesOctaves: GraphicsOverrideParameterType;
    static WavesPull: GraphicsOverrideParameterType;
    static WavesShape: GraphicsOverrideParameterType;
    static WavesSpeed: GraphicsOverrideParameterType;
    static WavesSpeedScaling: GraphicsOverrideParameterType;
    static getByName(paramarg0: string): GraphicsOverrideParameterType;
    static getByName(paramarg0: string, paramarg1: GraphicsOverrideParameterType): GraphicsOverrideParameterType;
    static getByValue(paramarg0: number): GraphicsOverrideParameterType;
    static getByValue(paramarg0: number, paramarg1: GraphicsOverrideParameterType): GraphicsOverrideParameterType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GraphicsOverrideParameterType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: GraphicsOverrideParameterType)
    readonly value: number;
    getValue(): number;
    name(): "SkyZenithColor" | "SkyHorizonColor" | "HorizonBlendMin" | "HorizonBlendMax" | "HorizonBlendStart" | "HorizonBlendMieStart" | "RayleighStrength" | "SunMieStrength" | "MoonMieStrength" | "SunGlareShape" | "Chlorophyll" | "CDOM" | "SuspendedSediment" | "WavesDepth" | "WavesFrequency" | "WavesFrequencyScaling" | "WavesSpeed" | "WavesSpeedScaling" | "WavesShape" | "WavesOctaves" | "WavesMix" | "WavesPull" | "WavesDirectionIncrement" | "MidtonesContrast" | "HighlightsContrast" | "ShadowsContrast" | "HighlightsGain" | "HighlightsGamma" | "HighlightsOffset" | "HighlightsSaturation" | "MidtonesGain" | "MidtonesGamma" | "MidtonesOffset" | "MidtonesSaturation" | "ShadowsGain" | "ShadowsGamma" | "ShadowsOffset" | "ShadowsSaturation" | "HighlightsMin" | "ShadowsMax" | "Temperature" | "SunColor" | "SunIlluminance" | "MoonColor" | "MoonIlluminance" | "FlashColor" | "FlashIlluminance" | "AmbientColor" | "AmbientIlluminance" | "EmissiveDesaturation" | "SkyIntensity" | "OrbitalOffsetDegrees";
}