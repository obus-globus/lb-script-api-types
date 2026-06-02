import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefContextMenuParams$MediaType } from '../../../org/cef/callback/CefContextMenuParams$MediaType.d.ts'
export interface CefContextMenuParams extends Object{
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