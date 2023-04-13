import React from "react";
import IconLinkedin from "/img/socials/linkedin.inline.svg";
import IconGithub from "/img/socials/github.inline.svg";
import IconTwitter from "/img/socials/twitter.inline.svg";

export type TeamProps = {
    team: Team;
};

type Team = {
    poles: Pole[];
};

type Pole = {
    name: string;
    members: Member[];
};

type Member = {
    name: string;
    photo: string;
    position: string;
    socials?: Social[];
};

type SocialName = "linkedin" | "twitter" | "github";

type Social = {
    name: SocialName;
    link: string;
};

export default function Team({ team }: TeamProps): JSX.Element {
    const getSocialIcon = (name: SocialName): JSX.Element => {
        switch (name) {
            case "linkedin":
                return <IconLinkedin />;
            case "github":
                return <IconGithub />;
            case "twitter":
                return <IconTwitter />;
            default:
                return <></>;
        }
    };

    return (
        team &&
        team.poles && (
            <div className="team_container">
                {team.poles.map((pole) => (
                    <div key={pole.name} className="team_pole">
                        <h2>{pole.name}</h2>
                        <div className="team_pole_members">
                            {pole.members.map((member) => (
                                <div key={member.name} className="member">
                                    <div className="photo">
                                        <img src={member.photo} />
                                    </div>
                                    <h3 className="name">{member.name}</h3>
                                    <h4 className="position">
                                        {member.position}
                                    </h4>
                                    {member.socials && (
                                        <div className="socials">
                                            {member.socials.map((social) => (
                                                <a
                                                    href={social.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social_link"
                                                >
                                                    {getSocialIcon(social.name)}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}
