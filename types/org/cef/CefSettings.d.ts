import type { Object } from '../../java/lang/Object.d.ts'
import type { CefSettings$ColorType } from '../../org/cef/CefSettings$ColorType.d.ts'
import type { CefSettings$LogSeverity } from '../../org/cef/CefSettings$LogSeverity.d.ts'
export class CefSettings extends Object {
    constructor()
    background_color: CefSettings$ColorType;
    browser_subprocess_path: string;
    cache_path: string;
    chrome_policy_id: string;
    command_line_args_disabled: boolean;
    cookieable_schemes_exclude_defaults: boolean;
    cookieable_schemes_list: string;
    framework_dir_path: string;
    javascript_flags: string;
    locale: string;
    locales_dir_path: string;
    log_file: string;
    log_severity: CefSettings$LogSeverity;
    main_bundle_path: string;
    persist_session_cookies: boolean;
    remote_debugging_port: number;
    resources_dir_path: string;
    root_cache_path: string;
    uncaught_exception_stack_size: number;
    user_agent: string;
    user_agent_product: string;
    windowless_rendering_enabled: boolean;
    clone(): CefSettings;
}