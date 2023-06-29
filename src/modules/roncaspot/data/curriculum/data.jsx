import React from "react";
import Hobbies from "./hobbies";
import { achievements } from "./achievements";
import Other from "./experiences/other";
import Skills from "./skills";
import WorkExperience from "./experiences";
import Education from "./education";
import { jsx2Html } from "@this/src/modules/roncaspot/libs/helpers";

var achiList = achievements.map((value, key) => {
  if (value.__hwc_url) {
    return {
      ...value,
      Description:
        (value.__hwc_name ? value.__hwc_name + ": " : "") +
        value.Description +
        " <a href='" +
        value.__hwc_url +
        "'>" +
        value.__hwc_url +
        "</a>",
    };
  } else return value;
});

achiList.push({
  Title: {
    Label: "Other Experiences",
  },
  Description: "<ul><li>" + Other.join("</li><li>") + "</li></ul>",
});

export default {
  Identification: {
    PersonName: {
      FirstName: "Giuseppe",
      Surname: "Ronca",
    },
    ContactInfo: {
      Address: {
        Contact: {
          PostalCode: "2011 XL",
          Municipality: "Haarlem",
          Country: {
            Label: "The Netherlands",
          },
        },
      },
      Email: {
        Contact: "roncalabs@gmail.com",
      },
      Telephone: [
        {
          Contact: "(+XX) XXXXXX",
          Use: {
            Code: "mobile",
            Label: "Mobile",
          },
        },
      ],
      Website: [
        {
          __hwc_type: "link",
          __hwc_icon: "fa fa-link",
          __hwc_name: "Website",
          Contact: "https://roncaspot.github.io",
        },
        {
          __hwc_type: "github",
          __hwc_icon: "fab fa-github",
          __hwc_name: "Github",
          Contact: "https://github.com/yehonal",
        },
        {
          __hwc_type: "linkedin",
          __hwc_icon: "fab fa-linkedin",
          __hwc_name: "Linkedin",
          Contact: "https://www.linkedin.com/in/joseph-ronca/",
        },
        {
          __hwc_type: "facebook",
          __hwc_icon: "fab fa-facebook",
          __hwc_name: "Facebook",
          Contact: "https://www.facebook.com/giusepperonca/",
        },
      ],
      InstantMessaging: [
        {
          Contact: "roncalabs@gmail.com",
          Use: {
            Label: "Google Hangouts",
          },
        },
      ],
    },
    Demographics: {
      Birthdate: {
        Year: 1990,
        Month: 4,
        Day: 17,
      },
      Gender: {
        Code: "M",
        Label: "Male",
      },
      Nationality: [
        {
          Code: "IT",
          Label: "Italian",
        },
      ],
    },
  },
  WorkExperience,
  Education,
  Skills: {
    Linguistic: {
      MotherTongue: [
        {
          Description: {
            __hwc_value: 100,
            Code: "it",
            Label: "Italian",
          },
        },
      ],
      ForeignLanguage: [
        {
          Description: {
            __hwc_value: 80,
            Code: "en",
            Label: "English",
          },
          ProficiencyLevel: {
            Listening: "B2",
            Reading: "C1",
            SpokenInteraction: "B1",
            SpokenProduction: "B1",
            Writing: "B2",
          },
        },
        {
          Description: {
            __hwc_value: 20,
            Code: "es",
            Label: "Spanish",
          },
          ProficiencyLevel: {
            Listening: "A2",
            Reading: "A2",
            SpokenInteraction: "A2",
            SpokenProduction: "A2",
            Writing: "A2",
          },
        },
        {
          Description: {
            __hwc_value: 10,
            Code: "fr",
            Label: "French",
          },
          ProficiencyLevel: {
            Listening: "A1",
            Reading: "A1",
            SpokenInteraction: "A1",
            SpokenProduction: "A1",
            Writing: "A1",
          },
        },
      ],
    },
    ...Skills,
    Driving: {
      Description: ["AM", "A1", "A2", "A", "B"],
    },
    Other: {
      Description: jsx2Html(<Hobbies />),
    },
  },
  Achievement: achiList,
};
