import type { Object } from '../../../java/lang/Object.d.ts'
export class OVRMultiview extends Object {
    static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: number;
    static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: number;
    static GL_FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: number;
    static GL_MAX_VIEWS_OVR: number;
    static glFramebufferTextureMultiviewOVR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glNamedFramebufferTextureMultiviewOVR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}