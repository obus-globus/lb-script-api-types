import type { CefContextMenuParams } from '../../../org/cef/callback/CefContextMenuParams.d.ts'
import type { CefContextMenuParams$MediaType } from '../../../org/cef/callback/CefContextMenuParams$MediaType.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefContextMenuParams_N extends CefNativeAdapter implements CefContextMenuParams {
    constructor()
    // private N_GetDictionarySuggestions(arg0: number, arg1: string[]): boolean;
    // private N_GetEditStateFlags(arg0: number): number;
    // private N_GetFrameCharset(arg0: number): string;
    // private N_GetFrameUrl(arg0: number): string;
    // private N_GetLinkUrl(arg0: number): string;
    // private N_GetMediaStateFlags(arg0: number): number;
    // private N_GetMediaType(arg0: number): CefContextMenuParams$MediaType;
    // private N_GetMisspelledWord(arg0: number): string;
    // private N_GetPageUrl(arg0: number): string;
    // private N_GetSelectionText(arg0: number): string;
    // private N_GetSourceUrl(arg0: number): string;
    // private N_GetTypeFlags(arg0: number): number;
    // private N_GetUnfilteredLinkUrl(arg0: number): string;
    // private N_GetXCoord(arg0: number): number;
    // private N_GetYCoord(arg0: number): number;
    // private N_HasImageContents(arg0: number): boolean;
    // private N_IsEditable(arg0: number): boolean;
    // private N_IsSpellCheckEnabled(arg0: number): boolean;
    getDictionarySuggestions(arg0: string[]): boolean;
    getEditStateFlags(): number;
    getFrameCharset(): string;
    getFrameUrl(): string;
    getLinkUrl(): string;
    getMediaStateFlags(): number;
    getMediaType(): CefContextMenuParams$MediaType;
    getMisspelledWord(): string;
    getPageUrl(): string;
    getSelectionText(): string;
    getSourceUrl(): string;
    getTypeFlags(): number;
    getUnfilteredLinkUrl(): string;
    getXCoord(): number;
    getYCoord(): number;
    hasImageContents(): boolean;
    isEditable(): boolean;
    isSpellCheckEnabled(): boolean;
}