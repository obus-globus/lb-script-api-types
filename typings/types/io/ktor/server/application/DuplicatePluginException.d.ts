import type { DuplicateApplicationPluginException } from '../../../../io/ktor/server/application/DuplicateApplicationPluginException.d.ts'
export class DuplicatePluginException extends DuplicateApplicationPluginException {
    constructor(message: string)
}