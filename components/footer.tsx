import { DiscordLogo } from "./assets/logos/discord";
import { GithubLogo } from "./assets/logos/github";
import { MetromFullLogo } from "./assets/logos/metrom-full";
import { TelegramLogo } from "./assets/logos/telegram";
import { XLogo } from "./assets/logos/x";

export function Footer() {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-5 mb-12">
            <div className="flex flex-col gap-11">
                <div className="flex gap-5">
                    <a
                        aria-label="GitHub repository"
                        href="https://github.com/metrom-xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubLogo className="w-5 h-5 dark:text-white text-gray-900" />
                    </a>
                    <a
                        aria-label="X account"
                        href="https://x.com/metromxyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <XLogo className="w-5 h-5 dark:text-white text-gray-900" />
                    </a>
                    <a
                        aria-label="Discord server"
                        href="https://discord.com/invite/uRer2D4Pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DiscordLogo className="w-5 h-5 dark:text-white text-gray-900" />
                    </a>
                    <a
                        aria-label="Telegram channel"
                        href="https://t.me/metrom_xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TelegramLogo className="w-5 h-5 dark:text-white text-gray-900" />
                    </a>
                </div>
                <MetromFullLogo className="max-w-36 dark:text-white text-gray-900" />
            </div>
            <div className="flex sm:flex-col items-center sm:items-start gap-3">
                <a
                    href="https://discord.com/invite/uRer2D4Pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Support
                </a>
                <a href="mailto:hello@metrom.xyz">Contact us</a>
            </div>
        </div>
    );
}
