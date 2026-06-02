import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBRPContext } from '../../../org/lwjgl/stb/STBRPContext.d.ts'
export class STBRectPack extends Object {
    static STBRP_HEURISTIC_Skyline_BF_sortHeight: number;
    static STBRP_HEURISTIC_Skyline_BL_sortHeight: number;
    static STBRP_HEURISTIC_Skyline_default: number;
    static STBRP__MAXVAL: number;
    static nstbrp_init_target(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nstbrp_pack_rects(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstbrp_setup_allow_out_of_mem(paramarg0: number, paramarg1: number): void;
    static nstbrp_setup_heuristic(paramarg0: number, paramarg1: number): void;
    static stbrp_init_target(paramarg0: STBRPContext, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): void;
    static stbrp_pack_rects(paramarg0: STBRPContext, paramarg1: (Object | null)[]): number;
    static stbrp_setup_allow_out_of_mem(paramarg0: STBRPContext, paramarg1: boolean): void;
    static stbrp_setup_heuristic(paramarg0: STBRPContext, paramarg1: number): void;
    constructor()
}