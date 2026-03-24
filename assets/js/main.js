const PLACEHOLDER = "assets/videos/placeholder.mp4";
const FLF2V_PROMPT = "Generate a complete video based on the provided first-frame and last-frame.";
const T2V_PROMPT_BANK = [
  "Generate a coherent cinematic video strictly following the text prompt with natural motion and lighting.",
  "Create a temporally consistent scene from text with clear subject dynamics and stable composition.",
  "Synthesize a complete text-driven video with realistic motion, structure, and visual continuity."
];
const I2V_PROMPT_BANK = [
  "Animate this reference image into a coherent video with smooth, natural motion.",
  "Preserve identity from the input image while generating cinematic temporal dynamics.",
  "Use the input image as the visual anchor and produce a complete, temporally consistent video."
];

const t2vVideoFiles = [
  "216.mp4",
  "24.mp4",
  "31.mp4",
  "33.mp4",
  "38.mp4",
  "39.mp4",
  "49.mp4",
  "5.mp4",
  "67.mp4",
  "8.mp4",
  "81.mp4",
  "93.mp4"
];

const t2vSource = {
  basePath: "assets/cases/t2v",
  // 可选：按 case ID 单独指定 prompt（不写则使用 T2V_PROMPT_BANK）
  casePrompts: {
    "5": "At the dining table, three young women pick up red wine glasses from the table to toast in celebration, rendered in a watercolor style.",
    "8": "A plump man sat down on the couch, which slowly sank under his weight.",
    "24": "A beautiful Chinese woman with long hair, wearing sunglasses and a long fur coat over a fitted knit dress and high heels, slowly lay down in the thick snow.",
    "31": "In a coffee shop, a boy wearing glasses is sitting and drinking coffee.",
    "33": "The magnificent Great Wall, bathed in the light of the setting sun, looks even more imposing. The camera pans from right to left.",
    "38": "In a spacious bedroom, the bedside table is filled with various books and decorative items. The camera moves from right to left, showcasing the entire room's layout.",
    "39": "In the garden of the modern villa, there stands an exquisite fountain sculpture shaped like a graceful swan. The camera tilts downward.",
    "49": "In the tranquil waters of the lake, a crocodile stealthily lurs, gliding through the depths. Gradually, it emerges, its massive, scaled head breaking the surface.",
    "67": "A little dog is lying in front of the gate, wagging its tail while drooling.",
    "81": "In the dessert shop, a female employee is intently making bread. Next to her, the shelves are neatly lined with a variety of desserts.",
    "93": "There is a throw pillow and a panda stuffed toy on the sofa. The entire video is presented in a watercolor style.",
    "216": "The penguin colony is at the edge of the ice. The penguins in the colony jump into the water in a relay."


    // "216": "Your custom prompt for case 216"
  },
  files: t2vVideoFiles
};

const i2vFiles = [
  "1.mp4",
  "1.png",
  "2.mp4",
  "2.png",
  "3.mp4",
  "3.png",
  "13.mp4",
  "13.png",
  "21.mp4",
  "21.png",
  "30.mp4",
  "30.png",
  "39.mp4",
  "39.png",
  "41.mp4",
  "41.png",
  "42.mp4",
  "42.png",
  "51.mp4",
  "51.png",
  "59.mp4",
  "59.png",
  "62.mp4",
  "62.png"
];

const i2vSource = {
  basePath: "assets/cases/i2v",
  // 可选：按 case ID 单独指定 prompt（不写则使用 I2V_PROMPT_BANK）
  casePrompts: {
    // "1": "Your custom prompt for case 1"
  },
  files: i2vFiles
};

const editingPromptBank = {
  add: [
    "Insert a new object into the scene while preserving camera motion and lighting consistency.",
    "Add the requested visual element naturally into the source video with coherent interactions.",
    "Introduce a new subject into the shot while keeping temporal continuity and identity stability."
  ],
  back: [
    "Replace the background while preserving foreground content and original motion trajectory.",
    "Edit only the environment and keep subjects, camera movement, and timing consistent.",
    "Swap the scene background with seamless temporal transitions and stable subject appearance."
  ],
  change: [
    "Modify the specified attribute while preserving the rest of the scene dynamics.",
    "Apply the requested local change with minimal disturbance to identity and motion.",
    "Change target content in-place while keeping camera path and temporal coherence."
  ],
  rm: [
    "Remove the target object from the video and reconstruct the scene naturally.",
    "Erase the specified element while preserving global structure, motion, and lighting.",
    "Delete the unwanted content and keep surrounding regions temporally consistent."
  ],
  style: [
    "Restyle the source video with the target visual style while preserving semantic content.",
    "Transfer the requested style and keep object identity and dynamics stable.",
    "Apply global style transformation while maintaining coherent motion and scene layout."
  ]
};

const editingSources = [
  {
    name: "add",
    basePath: "assets/cases/editing/add",
    casePrompts: {
      // "1": "Your custom prompt for editing/add case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "2_before.mp4",
      "2_after.mp4",
      "3_before.mp4",
      "3_after.mp4",
      "4_before.mp4",
      "4_after.mp4"
    ]
  },
  {
    name: "back",
    basePath: "assets/cases/editing/back",
    casePrompts: {
      // "1": "Your custom prompt for editing/back case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "2_before.mp4",
      "2_after.mp4",
      "3_before.mp4",
      "3_after.mp4",
      "4_before.mp4",
      "4_after.mp4"
    ]
  },
  {
    name: "change",
    basePath: "assets/cases/editing/change",
    casePrompts: {
      // "1": "Your custom prompt for editing/change case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "2_before.mp4",
      "2_after.mp4",
      "3_before.mp4",
      "3_after.mp4",
      "4_before.mp4",
      "4_after.mp4"
    ]
  },
  {
    name: "rm",
    basePath: "assets/cases/editing/rm",
    casePrompts: {
      // "1": "Your custom prompt for editing/rm case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "2_before.mp4",
      "2_after.mp4",
      "3_before.mp4",
      "3_after.mp4",
      "4_before.mp4",
      "4_after.mp4"
    ]
  },
  {
    name: "style",
    basePath: "assets/cases/editing/style",
    casePrompts: {
      // "1": "Your custom prompt for editing/style case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "2_before.mp4",
      "2_after.mp4",
      "3_before.mp4",
      "3_after.mp4",
      "4_before.mp4",
      "4_after.mp4"
    ]
  }
];

const tiv2vPromptBank = {
  replace: [
    "Replace the target content in the source video according to the reference image while preserving motion continuity.",
    "Use the input image to substitute target appearance and keep camera trajectory consistent.",
    "Perform object replacement guided by the reference image with stable temporal coherence."
  ],
  back: [
    "Change the source video background according to the reference image while preserving foreground dynamics.",
    "Adopt the background style from the input image and keep subject motion unchanged.",
    "Replace the scene environment with the reference image context and maintain temporal consistency."
  ],
  add: [
    "Add the reference-image content into the source video while preserving global structure and motion.",
    "Insert a new element guided by the input image with coherent interactions and lighting.",
    "Introduce reference-image objects into the source video and keep natural temporal transitions."
  ]
};

const tiv2vSources = [
  {
    name: "replace",
    basePath: "assets/cases/tiv2v/replace",
    casePrompts: {
      // "1": "Your custom prompt for tiv2v/replace case 1"
    },
    files: [
      "1_before.mp4",
      "1_after.mp4",
      "1.png",
      "2_before.mp4",
      "2_after.mp4",
      "2.png",
      "3_before.mp4",
      "3_after.mp4",
      "3.png",
      "4_before.mp4",
      "4_after.mp4",
      "4.png",
      "15_before.mp4",
      "15_after.mp4",
      "15.png"
    ]
  },
  {
    name: "back",
    basePath: "assets/cases/tiv2v/back",
    casePrompts: {
      // "51": "Your custom prompt for tiv2v/back case 51"
    },
    files: [
      "51_before.mp4",
      "51_after.mp4",
      "51.png",
      "59_before.mp4",
      "59_after.mp4",
      "59.png",
      "60_before.mp4",
      "60_after.mp4",
      "60.png",
      "72_before.mp4",
      "72_after.mp4",
      "72.png",
      "78_before.mp4",
      "78_after.mp4",
      "78.png"
    ]
  },
  {
    name: "add",
    basePath: "assets/cases/tiv2v/add",
    casePrompts: {
      // "95": "Your custom prompt for tiv2v/add case 95"
    },
    files: [
      "95_before.mp4",
      "95_after.mp4",
      "95.png",
      "96_before.mp4",
      "96_after.mp4",
      "96.png",
      "102_before.mp4",
      "102_after.mp4",
      "102.png",
      "115_before.mp4",
      "115_after.mp4",
      "115.png",
      "119_before.mp4",
      "119_after.mp4",
      "119.png",
      "124_before.mp4",
      "124_after.mp4",
      "124.png"
    ]
  }
];

const reasoningPromptBank = {
  single: [
    "Animate the reference image into a coherent scene and infer plausible subject intention from context.",
    "Use the input image as the anchor, reason about latent intent, then generate smooth and consistent motion.",
    "Preserve visual identity from the single image while planning a temporally coherent event sequence."
  ],
  multi: [
    "Jointly reason over the two input images, infer transition logic, and synthesize a consistent video outcome.",
    "Use both reference images to infer hidden user intent and generate temporally aligned scene evolution.",
    "Fuse the two visual anchors, complete the reasoning chain, and produce coherent motion with stable structure."
  ]
};

const reasoningSource = {
  basePath: "assets/cases/reasoning",
  // 可选：按 case ID 单独指定 prompt（不写则使用 reasoningPromptBank）
  casePrompts: {
    // "0": "Your custom prompt for reasoning case 0"
  },
  files: [
    "0.mp4",
    "0.png",
    "0.txt",
    "1.mp4",
    "1.png",
    "1.txt",
    "2_1.png",
    "2_2.png",
    "2.mp4",
    "2.txt",
    "3_1.png",
    "3_2.png",
    "3.mp4",
    "3.txt",
    "4_1.png",
    "4_2.png",
    "4.mp4",
    "4.txt",
    "5_1.png",
    "5_2.png",
    "5.mp4",
    "5.txt"
  ]
};

const reasoningCaseOrder = ["0", "1", "2", "3", "4", "5"];

const flf2vVideoFiles = [
  "00003.mp4",
  "00004.mp4",
  "00005.mp4",
  "00010.mp4",
  "00013.mp4",
  "00016.mp4",
  "00018.mp4",
  "00025.mp4",
  "00026.mp4",
  "00028.mp4",
  "00033.mp4",
  "00035.mp4",
  "00038.mp4",
  "00039.mp4",
  "00040.mp4",
  "00042.mp4",
  "00044.mp4",
  "00045.mp4",
  "00047.mp4",
  "00061.mp4",
  "00063.mp4",
  "00065.mp4",
  "00073.mp4",
  "00083.mp4",
  "00084.mp4",
  "00092.mp4"
];

const flf2vImageFiles = [
  "00003_1.png",
  "00003_2.png",
  "00004_1.png",
  "00004_2.png",
  "00005_1.png",
  "00005_2.png",
  "00010_1.png",
  "00010_2.png",
  "00013_1.png",
  "00013_2.png",
  "00016_1.png",
  "00016_2.png",
  "00018_1.png",
  "00018_2.png",
  "00025_1.png",
  "00025_2.png",
  "00026_1.png",
  "00026_2.png",
  "00028_1.png",
  "00028_2.png",
  "00033_1.png",
  "00033_2.png",
  "00035_1.png",
  "00035_2.png",
  "00038_1.png",
  "00038_2.png",
  "00039_1.png",
  "00039_2.png",
  "00040_1.png",
  "00040_2.png",
  "00042_1.png",
  "00042_2.png",
  "00044_1.png",
  "00044_2.png",
  "00045_1.png",
  "00045_2.png",
  "00047_1.png",
  "00047_2.png",
  "00061_1.png",
  "00062_1.png",
  "00063_1.png",
  "00063_2.png",
  "00065_1.png",
  "00065_2.png",
  "00074_1.png",
  "00074_2.png",
  "00083_1.png",
  "00083_2.png",
  "00084_1.png",
  "00084_2.png",
  "00092_1.png",
  "00092_2.png"
];

const flf2vSource = {
  videoBasePath: "assets/cases/first_last",
  imageBasePath: "assets/cases/first_last_imgs",
  // 可选：按 case ID 单独指定 prompt（不写则使用 FLF2V_PROMPT）
  casePrompts: {
    "3": "Camera tilts up to reveal giant anime girl's face.",
    "4": "Man turns head toward camera, smiling subtly with mouth slightly open.",
    "5": "Child runs down hallway, turns left, and enters another room.",
    "10": "Players sprint joyfully toward camera, celebrating in unison on field.",
    "13": "Woman's expression shifts from calm to concerned during intense conversation.",
    "16": "Boy walks toward red toy car as person passes by in background.",
    "18": "Woman enters room, places basket on counter, adjusts items while looking around.",
    "25": "The man stands up as tension builds in the hospital setting.",
    "26": "The man draws on a whiteboard while facing it.",
    "28": "Blood splashes onto the shocked officer's uniform from above.",
    "33": "Hands cut mushrooms.",
    "35": "Boy shifts gaze upward, revealing building as he speaks under sunny sky.",
    "38": "Girl shows toy, boy watches, then both play together.",
    "39": "Camera pans right, capturing cars and storefronts under cloudy skies.",
    "40": "Pan left from glassware case to reveal stone alley with plants and shops.",
    "42": "Camera follows group walking past flags and historic buildings.",
    "44": "Camera pans left, revealing more traditional Korean houses and greenery.",
    "45": "Camera pans left, revealing more square, pedestrians, and a man entering frame.",
    "47": "Camera moves to reveal the traffic.",
    "63": "Girl sways and gestures while singing, ending with a turn away.",
    "65": "Scissors slice litchi; hand peels back skin to reveal juicy white flesh.",
    "83": "The solo rabbit meets three others, forming a group in the forest.",
    "84": "Silver Golf GTI drives away along winding forest road."






    // "3": "Your custom prompt for FLF2V case 3"
  },
  videoFiles: flf2vVideoFiles,
  imageFiles: flf2vImageFiles
};

const interleavedSources = [
  {
    imageCount: 1,
    basePath: "assets/cases/subject1_ori",
    // 可选：按 case ID 单独指定 prompt（不写则使用默认 promptBank）
    casePrompts: {
      "1": "The man in the image, initially speaks with a sad expression. As he continues, he gently tilts his head down toward the other person.",
      "5": "A group of men gazes up in shock and concern as the man in the image slowly crosses his arms.",
      "10": "The bird in the image, perched on damp ground near petals, dips its head in the water and quickly walks off-screen to the right.",
      "26": "The child in the image stands inside a playhouse, ducks out of sight behind the counter, then re-emerges holding a toy.",
    },
    files: [
      "1.mp4",
      "1.png",
      "10.mp4",
      "10.png",
      // "18.mp4",
      // "18.png",
      // "22.mp4",
      // "22.png",
      "26.mp4",
      "26.png",
      // "30.mp4",
      // "30.png",
      "5.mp4",
      "5.png"
    ]
  },
  {
    imageCount: 2,
    basePath: "assets/cases/subject2_ori",
    casePrompts: {
      "68": "The woman in the first image looks surprised against the background of the second image. She briefly closes her eyes, then speaks while gripping the steering wheel.",
      "69": "The zongzi in the first image shift across the scene over the background in the second image due to a slow camera pan.",
      "77": "The woman in the first image speaks animatedly over the background shown in the second image, using hand gestures to emphasize her words.",
      "136": "Set against the background of the second image, the woman in the first image looks up and sways gently. Her expression shifts to a smile as she mouths words."
      
    },
    files: [
      "136_1.png",
      "136_2.png",
      "136.mp4",
      "68_1.png",
      "68_2.png",
      "68.mp4",
      "69_1.png",
      "69_2.png",
      "69.mp4",
      "77_1.png",
      "77_2.png",
      "77.mp4",
      // "78_1.png",
      // "78_2.png",
      // "78_ori.mp4",
      // "89_1.png",
      // "89_2.png",
      // "89.mp4"
    ]
  },
  {
    imageCount: 2,
    basePath: "assets/cases/subject2_2",
    casePrompts: {
      "2": "The man in the first image speaks. The woman in the second image lowers her hand, turns to him, and gestures while talking.",
      "3": "The camera pans right, revealing the pastry rolls from the first image and the bowl of golden jelly from the second image.",
      "15": "A person tilts the white teapot in the first image to pour hot liquid into the teacup shown in the second image.",
      "22": "The bear in the first image picks up the nearby girl in the second image, holds her briefly, and sets her down by a large snowball."
    },
    files: [
      "15_1.png",
      "15_2.png",
      "15.mp4",
      "2_1.png",
      "2_2.png",
      "2.mp4",
      "22_1.png",
      "22_2.png",
      "22.mp4",
      "3_1.png",
      "3_2.png",
      "3.mp4"
    ]
  },
  {
    imageCount: 3,
    basePath: "assets/cases/subject3_ori",
    casePrompts: {
      "101": "The cat in the first image, appearing angry over the background of the third image, looks at the mouse from the second image that he is holding.",
      "107": "The woman in the first image holds the handbag in the second image up towards the camera while speaking over the background in the third image.",
      "115": "The girl in the first image kneels against the background of the third image. The boy in the second image touches the dirt.",
      "126": "The woman in the first image smiles widely over the background from the third image. The man in the second image holds his coffee and adjusts his cap backward.",
      "135": "The fox in the first image and the rabbit in the second image are talking over the background in the third image, but a loud noise suddenly terrifies them.",
    },
    files: [
      "101_1.png",
      "101_2.png",
      "101_3.png",
      "101.mp4",
      // "104_1.png",
      // "104_2.png",
      // "104_3.png",
      // "104.mp4",
      "107_1.png",
      "107_2.png",
      "107_3.png",
      "107.mp4",
      "115_1.png",
      "115_2.png",
      "115_3.png",
      "115.mp4",
      "126_1.png",
      "126_2.png",
      "126_3.png",
      "126.mp4",
      "135_1.png",
      "135_2.png",
      "135_3.png",
      "135.mp4"
    ]
  },
  {
    imageCount: 3,
    basePath: "assets/cases/subject3_2",
    casePrompts: {
      "2": "The bear in the first image stirs the jam jar in the third image with the spoon in the second image. It scoops up jam with the spoon, lifts it, and opens its mouth to taste.",
      "9": "The man in the first image starts talking. The woman in the second image stands still. The woman in the third image also stands still with her arms crossed.",
      "17": "The cars in the first, second, and third images are driving on the road.",
    },
    files: [
      "2_1.png",
      "2_2.png",
      "2_3.png",
      "2.mp4",
      "9_1.png",
      "9_2.png",
      "9_3.png",
      "9.mp4",
      "17_1.png",
      "17_2.png",
      "17_3.png",
      "17.mp4",
      // "101_1.png",
      // "101_2.png",
      // "101_3.png",
      // "101.mp4",
      // "104_1.png",
      // "104_2.png",
      // "104_3.png",
      // "104.mp4",
      // "107_1.png",
      // "107_2.png",
      // "107_3.png",
      // "107.mp4",
      // "115_1.png",
      // "115_2.png",
      // "115_3.png",
      // "115.mp4",
      // "126_1.png",
      // "126_2.png",
      // "126_3.png",
      // "126.mp4",
      // "135_1.png",
      // "135_2.png",
      // "135_3.png",
      // "135.mp4"
    ]
  },
  {
    imageCount: 4,
    basePath: "assets/cases/subject4",
    casePrompts: {
      "37": "The men in the first image, the second image, and the third image walk forward together on a staircase, examining documents in their hands against the background of the fourth image.",
      "39": "The men from the first, second, and third images cheerfully interacting and talking in the background shown in the fourth image.",
      "55": "The pink handbag in the first image, the green handbag in the second image, and the blue handbag in the third image remain stationary but shift slightly in the frame due to the camera's slow upward movement over the background in the fourth image.",
      "56": "The brown bears in the first and second images, along with the squirrel in the third image, stand still with shocked expressions against the background of the fourth image.",
      "59": "The woman in the first image holds the yellow flower in the second image and the red flower in the third image toward the camera as she talks over the background in the fourth image.",
      "65": "The man in the first image and the woman in the second image talk with mouths opening and closing over the background in the fourth image. The drone in the third image rotates steadily clockwise.",
      "69": "The man in the first image talks animatedly to the camera against the background in the fourth image. The man in the second image smiles. The woman in the third image stands between them and keeps her thumbs-up.",
      "100": "	The woman in the first image, the man in the second image, and the young girl in the third image, all dressed festively for Christmas, dance joyfully over the background shown in the fourth image."

    },
    files: [
      "37_1.png",
      "37_2.png",
      "37_3.png",
      "37_4.png",
      "37.mp4",
      "39_1.png",
      "39_2.png",
      "39_3.png",
      "39_4.png",
      "39.mp4",
      "55_1.png",
      "55_2.png",
      "55_3.png",
      "55_4.png",
      "55.mp4",
      "56_1.png",
      "56_2.png",
      "56_3.png",
      "56_4.png",
      "56.mp4",
      "59_1.png",
      "59_2.png",
      "59_3.png",
      "59_4.png",
      "59.mp4",
      "65_1.png",
      "65_2.png",
      "65_3.png",
      "65_4.png",
      "65.mp4",
      "69_1.png",
      "69_2.png",
      "69_3.png",
      "69_4.png",
      "69.mp4",
      "100_1.png",
      "100_2.png",
      "100_3.png",
      "100_4.png",
      "100.mp4"
    ]
  }
];

function parseVideoId(fileName) {
  const match = fileName.match(/^(\d+)/);
  return match ? String(parseInt(match[1], 10)) : null;
}

function parseImageInfo(fileName) {
  const match = fileName.match(/^(\d+)_([12])\.[^.]+$/i);
  if (!match) {
    return null;
  }

  return {
    id: String(parseInt(match[1], 10)),
    slot: Number(match[2])
  };
}

function parseStandaloneImageId(fileName) {
  const match = fileName.match(/^(\d+)\.[^.]+$/i);
  return match ? String(parseInt(match[1], 10)) : null;
}

function parseEditingFileInfo(fileName) {
  const match = fileName.match(/^(\d+)_(before|after)\.[^.]+$/i);
  if (!match) {
    return null;
  }

  return {
    id: String(parseInt(match[1], 10)),
    type: match[2].toLowerCase()
  };
}

function parseReasoningTraceId(fileName) {
  const match = fileName.match(/^(\d+)\.txt$/i);
  return match ? String(parseInt(match[1], 10)) : null;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseInterleavedImageInfo(fileName) {
  const match = fileName.match(/^(\d+)(?:_(\d+))?\.[^.]+$/i);
  if (!match) {
    return null;
  }

  return {
    id: String(parseInt(match[1], 10)),
    slot: match[2] ? Number(match[2]) : 1
  };
}

function isVideoFile(fileName) {
  return /\.(mp4|webm|mov)$/i.test(fileName);
}

function isImageFile(fileName) {
  return /\.(png|jpg|jpeg|webp)$/i.test(fileName);
}

function getVideoAspectRatio(videoPath) {
  return new Promise((resolve) => {
    const tempVideo = document.createElement("video");
    tempVideo.preload = "metadata";

    const finish = (ratio) => {
      tempVideo.removeAttribute("src");
      tempVideo.load();
      resolve(ratio > 0 ? ratio : 16 / 10);
    };

    tempVideo.onloadedmetadata = () => {
      const ratio = tempVideo.videoWidth && tempVideo.videoHeight
        ? tempVideo.videoWidth / tempVideo.videoHeight
        : 16 / 10;
      finish(ratio);
    };

    tempVideo.onerror = () => finish(16 / 10);
    tempVideo.src = videoPath;
  });
}

function buildInterleavedPrompt(imageCount, index) {
  const promptBank = {
    1: [
      "Animate the single input image into a coherent cinematic shot with natural motion.",
      "Preserve identity from one reference image and generate smooth scene dynamics.",
      "Use the single visual cue to create a temporally consistent video narrative."
    ],
    2: [
      "Blend the two references into one temporally consistent video scene.",
      "Fuse style and subject from two images while keeping stable motion.",
      "Compose one coherent video from two visual anchors with smooth transitions."
    ],
    3: [
      "Integrate three references to control subject, style, and camera evolution.",
      "Compose a unified video from three images with consistent structure and dynamics.",
      "Use three inputs to guide content layout, style transfer, and temporal motion."
    ],
    4: [
      "Integrate four visual references into one coherent video with stable identity and motion.",
      "Use four input images to jointly control composition, style, and temporal continuity.",
      "Generate a complete video by harmonizing four references in one consistent scene."
    ]
  };

  const candidates = promptBank[imageCount] || promptBank[1];
  return candidates[index % candidates.length];
}

function getCustomCasePrompt(source, caseId) {
  const promptMap = source && source.casePrompts && typeof source.casePrompts === "object"
    ? source.casePrompts
    : null;

  if (!promptMap) {
    return "";
  }

  const normalizedId = String(parseInt(caseId, 10));
  return promptMap[caseId] || promptMap[normalizedId] || "";
}

function buildT2VPrompt(index) {
  return T2V_PROMPT_BANK[index % T2V_PROMPT_BANK.length];
}

function buildI2VPrompt(index) {
  return I2V_PROMPT_BANK[index % I2V_PROMPT_BANK.length];
}

const T2V_ROW_SIZE = 4;
let t2vResizeBound = false;

function syncT2VRowMediaHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".t2v-row");
  rowNodes.forEach((row) => {
    let targetInputHeight = 0;
    let targetVideoHeight = 0;

    row.querySelectorAll(".t2v-auto-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const videoRatio = Number(card.dataset.ratio) || 16 / 10;
      const videoNode = card.querySelector(".t2v-auto-video");
      const videoWidth = videoNode ? videoNode.getBoundingClientRect().width : 0;
      const renderedVideoRatio = videoNode && videoNode.videoWidth && videoNode.videoHeight
        ? videoNode.videoWidth / videoNode.videoHeight
        : videoRatio;

      if (videoWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, videoWidth / renderedVideoRatio);
      }
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--t2v-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--t2v-row-input-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--t2v-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--t2v-row-video-height");
    }
  });
}

async function renderT2VCases() {
  const container = document.getElementById("t2vCaseGrid");
  if (!container) {
    return;
  }

  const orderedFiles = [...t2vSource.files].sort((a, b) => Number(parseVideoId(a)) - Number(parseVideoId(b)));

  if (orderedFiles.length === 0) {
    container.innerHTML = '<p class="task-intro">No T2V cases found.</p>';
    return;
  }

  const caseEntries = orderedFiles.map((videoName, index) => {
    const id = parseVideoId(videoName);
    const customPrompt = getCustomCasePrompt(t2vSource, id);

    return {
      id,
      prompt: customPrompt || buildT2VPrompt(index),
      videoPath: `${t2vSource.basePath}/${videoName}`
    };
  });

  const casesWithRatio = await Promise.all(
    caseEntries.map(async (entry) => ({
      ...entry,
      ratio: await getVideoAspectRatio(entry.videoPath)
    }))
  );

  const sortedCases = [...casesWithRatio].sort((a, b) => b.ratio - a.ratio);
  const rowGroups = [];

  for (let index = 0; index < sortedCases.length; index += T2V_ROW_SIZE) {
    rowGroups.push(sortedCases.slice(index, index + T2V_ROW_SIZE));
  }

  container.innerHTML = rowGroups
    .map((rowItems) => `
      <div class="t2v-row">
        ${rowItems
          .map((entry) => `
            <article class="compact-case flf2v-case t2v-auto-case" data-ratio="${entry.ratio}">
              <div class="compact-input">
                <strong>Prompt</strong>
                <p>${entry.prompt}</p>
              </div>
              <div class="compact-output">
                <video class="demo-video flf2v-video t2v-auto-video" controls muted playsinline preload="metadata" data-src="${entry.videoPath}"></video>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `)
    .join("");

  const rerenderRowHeights = () => syncT2VRowMediaHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".t2v-auto-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!t2vResizeBound) {
    window.addEventListener("resize", () => {
      syncT2VRowMediaHeights(document.getElementById("t2vCaseGrid"));
    });
    t2vResizeBound = true;
  }
}

const I2V_ROW_SIZE = 4;
let i2vResizeBound = false;

function syncI2VRowMediaHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".i2v-row");
  rowNodes.forEach((row) => {
    let targetInputHeight = 0;
    let targetImageHeight = 0;
    let targetVideoHeight = 0;

    row.querySelectorAll(".i2v-auto-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const videoRatio = Number(card.dataset.ratio) || 16 / 10;
      const videoNode = card.querySelector(".i2v-auto-video");
      const videoWidth = videoNode ? videoNode.getBoundingClientRect().width : 0;
      const renderedVideoRatio = videoNode && videoNode.videoWidth && videoNode.videoHeight
        ? videoNode.videoWidth / videoNode.videoHeight
        : videoRatio;
      if (videoWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, videoWidth / renderedVideoRatio);
      }

      card.querySelectorAll(".i2v-auto-thumb").forEach((imgNode) => {
        const imageWidth = imgNode.getBoundingClientRect().width;
        const imageRatio = imgNode.naturalWidth && imgNode.naturalHeight
          ? imgNode.naturalWidth / imgNode.naturalHeight
          : 16 / 10;

        if (imageWidth > 0) {
          targetImageHeight = Math.max(targetImageHeight, imageWidth / imageRatio);
        }
      });
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--i2v-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--i2v-row-input-height");
    }

    if (targetImageHeight > 0) {
      row.style.setProperty("--i2v-row-image-height", `${Math.round(targetImageHeight)}px`);
    } else {
      row.style.removeProperty("--i2v-row-image-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--i2v-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--i2v-row-video-height");
    }
  });
}

async function renderI2VCases() {
  const container = document.getElementById("i2vCaseGrid");
  if (!container) {
    return;
  }

  const videoMap = new Map();
  const imageMap = new Map();

  i2vSource.files.forEach((fileName) => {
    if (isVideoFile(fileName)) {
      const id = parseVideoId(fileName);
      if (id && !videoMap.has(id)) {
        videoMap.set(id, fileName);
      }
      return;
    }

    if (isImageFile(fileName)) {
      const id = parseStandaloneImageId(fileName);
      if (id && !imageMap.has(id)) {
        imageMap.set(id, fileName);
      }
    }
  });

  const matchedIds = [...videoMap.keys()]
    .filter((id) => imageMap.has(id))
    .sort((a, b) => Number(a) - Number(b));

  if (matchedIds.length === 0) {
    container.innerHTML = '<p class="task-intro">No matched I2V cases found.</p>';
    return;
  }

  const caseEntries = matchedIds.map((id, index) => {
    const customPrompt = getCustomCasePrompt(i2vSource, id);

    return {
      id,
      prompt: customPrompt || buildI2VPrompt(index),
      imagePath: `${i2vSource.basePath}/${imageMap.get(id)}`,
      videoPath: `${i2vSource.basePath}/${videoMap.get(id)}`
    };
  });

  const casesWithRatio = await Promise.all(
    caseEntries.map(async (entry) => ({
      ...entry,
      ratio: await getVideoAspectRatio(entry.videoPath)
    }))
  );

  const sortedCases = [...casesWithRatio].sort((a, b) => b.ratio - a.ratio);
  const rowGroups = [];

  for (let index = 0; index < sortedCases.length; index += I2V_ROW_SIZE) {
    rowGroups.push(sortedCases.slice(index, index + I2V_ROW_SIZE));
  }

  container.innerHTML = rowGroups
    .map((rowItems) => `
      <div class="i2v-row">
        ${rowItems
          .map((entry) => `
            <article class="compact-case flf2v-case i2v-auto-case" data-ratio="${entry.ratio}">
              <div class="compact-input">
                <strong>Input Image</strong>
                <img class="i2v-auto-thumb" src="${entry.imagePath}" alt="I2V input image ${entry.id}" />
                <p><strong class="prompt-inline-label">Prompt:</strong> ${entry.prompt}</p>
              </div>
              <div class="compact-output">
                <video class="demo-video i2v-auto-video" controls muted playsinline preload="metadata" data-src="${entry.videoPath}"></video>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `)
    .join("");

  const rerenderRowHeights = () => syncI2VRowMediaHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".i2v-auto-thumb").forEach((imgNode) => {
    if (!imgNode.complete) {
      imgNode.addEventListener("load", rerenderRowHeights, { once: true });
    }
  });

  container.querySelectorAll(".i2v-auto-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!i2vResizeBound) {
    window.addEventListener("resize", () => {
      syncI2VRowMediaHeights(document.getElementById("i2vCaseGrid"));
    });
    i2vResizeBound = true;
  }
}

function buildTIV2VPrompt(sourceName, index) {
  const prompts = tiv2vPromptBank[sourceName] || tiv2vPromptBank.replace;
  return prompts[index % prompts.length];
}

function buildTIV2VCasesFromSource(source) {
  const videoMap = new Map();
  const imageMap = new Map();

  source.files.forEach((fileName) => {
    if (isVideoFile(fileName)) {
      const info = parseEditingFileInfo(fileName);
      if (!info) {
        return;
      }

      if (!videoMap.has(info.id)) {
        videoMap.set(info.id, {});
      }

      videoMap.get(info.id)[info.type] = fileName;
      return;
    }

    if (isImageFile(fileName)) {
      const id = parseStandaloneImageId(fileName);
      if (id && !imageMap.has(id)) {
        imageMap.set(id, fileName);
      }
    }
  });

  return [...videoMap.keys()]
    .filter((id) => {
      const pair = videoMap.get(id);
      return pair && pair.before && pair.after && imageMap.has(id);
    })
    .sort((a, b) => Number(a) - Number(b))
    .map((id, index) => {
      const customPrompt = getCustomCasePrompt(source, id);

      return {
        id,
        prompt: customPrompt || buildTIV2VPrompt(source.name, index),
        beforePath: `${source.basePath}/${videoMap.get(id).before}`,
        imagePath: `${source.basePath}/${imageMap.get(id)}`,
        afterPath: `${source.basePath}/${videoMap.get(id).after}`
      };
    });
}

const TIV2V_ROW_SIZE = 4;
let tiv2vResizeBound = false;

function syncTIV2VRowMediaHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".tiv2v-row");
  rowNodes.forEach((row) => {
    let targetInputHeight = 0;
    let targetImageHeight = 0;
    let targetVideoHeight = 0;

    row.querySelectorAll(".tiv2v-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const beforeRatio = Number(card.dataset.beforeRatio) || 16 / 10;
      const afterRatio = Number(card.dataset.afterRatio) || 16 / 10;

      const beforeNode = card.querySelector(".tiv2v-before-video");
      const beforeWidth = beforeNode ? beforeNode.getBoundingClientRect().width : 0;
      const renderedBeforeRatio = beforeNode && beforeNode.videoWidth && beforeNode.videoHeight
        ? beforeNode.videoWidth / beforeNode.videoHeight
        : beforeRatio;
      if (beforeWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, beforeWidth / renderedBeforeRatio);
      }

      const afterNode = card.querySelector(".tiv2v-after-video");
      const afterWidth = afterNode ? afterNode.getBoundingClientRect().width : 0;
      const renderedAfterRatio = afterNode && afterNode.videoWidth && afterNode.videoHeight
        ? afterNode.videoWidth / afterNode.videoHeight
        : afterRatio;
      if (afterWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, afterWidth / renderedAfterRatio);
      }

      card.querySelectorAll(".tiv2v-ref-image").forEach((imgNode) => {
        const imageWidth = imgNode.getBoundingClientRect().width;
        const imageRatio = imgNode.naturalWidth && imgNode.naturalHeight
          ? imgNode.naturalWidth / imgNode.naturalHeight
          : 16 / 10;

        if (imageWidth > 0) {
          targetImageHeight = Math.max(targetImageHeight, imageWidth / imageRatio);
        }
      });
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--tiv2v-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--tiv2v-row-input-height");
    }

    if (targetImageHeight > 0) {
      row.style.setProperty("--tiv2v-row-image-height", `${Math.round(targetImageHeight)}px`);
    } else {
      row.style.removeProperty("--tiv2v-row-image-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--tiv2v-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--tiv2v-row-video-height");
    }
  });
}

async function renderTIV2VCases() {
  const container = document.getElementById("tiv2vCaseGrid");
  if (!container) {
    return;
  }

  const orderedCases = tiv2vSources.flatMap((source) => buildTIV2VCasesFromSource(source));

  if (!orderedCases.length) {
    container.innerHTML = '<p class="task-intro">No matched TIV2V cases found.</p>';
    return;
  }

  const casesWithRatio = await Promise.all(
    orderedCases.map(async (entry) => ({
      ...entry,
      beforeRatio: await getVideoAspectRatio(entry.beforePath),
      afterRatio: await getVideoAspectRatio(entry.afterPath)
    }))
  );

  const rowGroups = [];
  for (let index = 0; index < casesWithRatio.length; index += TIV2V_ROW_SIZE) {
    rowGroups.push(casesWithRatio.slice(index, index + TIV2V_ROW_SIZE));
  }

  container.innerHTML = rowGroups
    .map((rowItems) => `
      <div class="tiv2v-row">
        ${rowItems
          .map((entry) => `
            <article class="compact-case flf2v-case tiv2v-case" data-before-ratio="${entry.beforeRatio}" data-after-ratio="${entry.afterRatio}">
              <div class="compact-input">
                <strong>Input Video</strong>
                <video class="demo-video tiv2v-before-video" controls muted playsinline preload="metadata" data-src="${entry.beforePath}"></video>
                <div class="tiv2v-meta-row">
                  <img class="tiv2v-ref-image" src="${entry.imagePath}" alt="TIV2V input image ${entry.id}" />
                  <p><strong class="prompt-inline-label">Prompt:</strong> ${entry.prompt}</p>
                </div>
              </div>
              <div class="compact-output">
                <video class="demo-video tiv2v-after-video" controls muted playsinline preload="metadata" data-src="${entry.afterPath}"></video>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `)
    .join("");

  const rerenderRowHeights = () => syncTIV2VRowMediaHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".tiv2v-ref-image").forEach((imgNode) => {
    if (!imgNode.complete) {
      imgNode.addEventListener("load", rerenderRowHeights, { once: true });
    }
  });

  container.querySelectorAll(".tiv2v-before-video, .tiv2v-after-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!tiv2vResizeBound) {
    window.addEventListener("resize", () => {
      syncTIV2VRowMediaHeights(document.getElementById("tiv2vCaseGrid"));
    });
    tiv2vResizeBound = true;
  }
}

function buildReasoningPrompt(index, imageCount) {
  const promptPool = imageCount > 1 ? reasoningPromptBank.multi : reasoningPromptBank.single;
  return promptPool[index % promptPool.length];
}

function buildReasoningCasesFromSource(source) {
  const videoMap = new Map();
  const imageMap = new Map();
  const traceMap = new Map();

  source.files.forEach((fileName) => {
    if (isVideoFile(fileName)) {
      const id = parseVideoId(fileName);
      if (id && !videoMap.has(id)) {
        videoMap.set(id, fileName);
      }
      return;
    }

    if (/\.txt$/i.test(fileName)) {
      const id = parseReasoningTraceId(fileName);
      if (id && !traceMap.has(id)) {
        traceMap.set(id, fileName);
      }
      return;
    }

    if (isImageFile(fileName)) {
      const info = parseInterleavedImageInfo(fileName);
      if (!info) {
        return;
      }

      if (!imageMap.has(info.id)) {
        imageMap.set(info.id, {});
      }

      imageMap.get(info.id)[info.slot] = fileName;
    }
  });

  const matchedIds = reasoningCaseOrder
    .filter((id) => videoMap.has(id) && traceMap.has(id) && imageMap.has(id));

  return matchedIds.map((id, index) => {
    const images = imageMap.get(id) || {};
    const imageSlots = Object.keys(images)
      .map((slot) => Number(slot))
      .sort((a, b) => a - b)
      .slice(0, 2);

    const imagePaths = imageSlots.map((slot) => `${source.basePath}/${images[slot]}`);
    const customPrompt = getCustomCasePrompt(source, id);

    return {
      id,
      prompt: customPrompt || buildReasoningPrompt(index, imagePaths.length),
      imagePaths,
      tracePath: `${source.basePath}/${traceMap.get(id)}`,
      videoPath: `${source.basePath}/${videoMap.get(id)}`
    };
  });
}

async function loadReasoningTrace(tracePath) {
  try {
    const response = await fetch(tracePath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load reasoning trace: ${tracePath}`);
    }

    const text = (await response.text()).trim();
    return text || "No reasoning trace available.";
  } catch (error) {
    return "Reasoning trace file is missing or unavailable.";
  }
}

async function renderReasoningCases() {
  const container = document.getElementById("reasoningCaseGrid");
  if (!container) {
    return;
  }

  const orderedCases = buildReasoningCasesFromSource(reasoningSource);
  if (!orderedCases.length) {
    container.innerHTML = '<p class="task-intro">No matched reasoning cases found.</p>';
    return;
  }

  const casesWithTrace = await Promise.all(
    orderedCases.map(async (entry) => ({
      ...entry,
      trace: await loadReasoningTrace(entry.tracePath)
    }))
  );

  container.innerHTML = casesWithTrace
    .map((entry) => `
      <article class="compact-case reasoning-case">
        <div class="reasoning-col reasoning-input-col">
          <strong>Input</strong>
          <div class="reasoning-image-row count-${Math.min(entry.imagePaths.length, 2)}">
            ${entry.imagePaths.map((imgPath, idx) => `<img class="reasoning-input-image" src="${imgPath}" alt="Reasoning input ${entry.id}-${idx + 1}" />`).join("")}
          </div>
          <p class="reasoning-user-prompt">${entry.prompt}</p>
        </div>

        <div class="reasoning-col reasoning-trace-col">
          <strong>Reasoning</strong>
          <pre class="reasoning-trace-text">${escapeHtml(entry.trace)}</pre>
        </div>

        <div class="reasoning-col compact-output reasoning-output-col">
          <video class="demo-video reasoning-output-video" controls muted playsinline preload="metadata" data-src="${entry.videoPath}"></video>
        </div>
      </article>
    `)
    .join("");
}

function buildEditingPrompt(sourceName, index) {
  const prompts = editingPromptBank[sourceName] || editingPromptBank.change;
  return prompts[index % prompts.length];
}

function buildEditingCasesFromSource(source) {
  const caseMap = new Map();

  source.files.forEach((fileName) => {
    if (!isVideoFile(fileName)) {
      return;
    }

    const info = parseEditingFileInfo(fileName);
    if (!info) {
      return;
    }

    if (!caseMap.has(info.id)) {
      caseMap.set(info.id, {});
    }

    caseMap.get(info.id)[info.type] = fileName;
  });

  return [...caseMap.entries()]
    .filter(([, pair]) => pair.before && pair.after)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([id, pair], index) => {
      const customPrompt = getCustomCasePrompt(source, id);

      return {
        id,
        prompt: customPrompt || buildEditingPrompt(source.name, index),
        beforePath: `${source.basePath}/${pair.before}`,
        afterPath: `${source.basePath}/${pair.after}`
      };
    });
}

let editingResizeBound = false;

function syncEditingRowVideoHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".editing-case-row");
  rowNodes.forEach((row) => {
    let targetInputHeight = 0;
    let targetVideoHeight = 0;

    row.querySelectorAll(".editing-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const beforeRatio = Number(card.dataset.beforeRatio) || 16 / 10;
      const afterRatio = Number(card.dataset.afterRatio) || 16 / 10;

      const beforeNode = card.querySelector(".editing-before-video");
      const beforeWidth = beforeNode ? beforeNode.getBoundingClientRect().width : 0;
      const renderedBeforeRatio = beforeNode && beforeNode.videoWidth && beforeNode.videoHeight
        ? beforeNode.videoWidth / beforeNode.videoHeight
        : beforeRatio;
      if (beforeWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, beforeWidth / renderedBeforeRatio);
      }

      const afterNode = card.querySelector(".editing-after-video");
      const afterWidth = afterNode ? afterNode.getBoundingClientRect().width : 0;
      const renderedAfterRatio = afterNode && afterNode.videoWidth && afterNode.videoHeight
        ? afterNode.videoWidth / afterNode.videoHeight
        : afterRatio;
      if (afterWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, afterWidth / renderedAfterRatio);
      }
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--editing-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--editing-row-input-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--editing-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--editing-row-video-height");
    }
  });
}

async function renderEditingCases() {
  const container = document.getElementById("editingCaseGrid");
  if (!container) {
    return;
  }

  const rowBlocks = await Promise.all(
    editingSources.map(async (source) => {
      const cases = buildEditingCasesFromSource(source);
      if (!cases.length) {
        return "";
      }

      const casesWithRatio = await Promise.all(
        cases.map(async (entry) => ({
          ...entry,
          beforeRatio: await getVideoAspectRatio(entry.beforePath),
          afterRatio: await getVideoAspectRatio(entry.afterPath)
        }))
      );

      const rowHtml = casesWithRatio.map((entry) => {
        const needsNarrowFit = entry.afterPath.includes("/editing/style/4_after.mp4") || entry.afterPath.includes("/editing/change/3_after.mp4");
        const narrowFitClass = needsNarrowFit ? " narrow-fit-55" : "";
        const beforeClass = `demo-video editing-before-video${narrowFitClass}`;
        const afterClass = `demo-video editing-after-video${narrowFitClass}`;

        return `
        <article class="compact-case flf2v-case editing-case" data-before-ratio="${entry.beforeRatio}" data-after-ratio="${entry.afterRatio}">
          <div class="compact-input">
            <strong>Input Video</strong>
            <video class="${beforeClass}" controls muted playsinline preload="metadata" data-src="${entry.beforePath}"></video>
            <p><strong class="prompt-inline-label">Prompt:</strong> ${entry.prompt}</p>
          </div>
          <div class="compact-output">
            <video class="${afterClass}" controls muted playsinline preload="metadata" data-src="${entry.afterPath}"></video>
          </div>
        </article>
      `;
      }).join("");

      return `
        <div class="compact-case-grid flf2v-case-grid editing-case-row">
          ${rowHtml}
        </div>
      `;
    })
  );

  const rowHtml = rowBlocks.filter(Boolean).join("");
  if (!rowHtml) {
    container.innerHTML = '<p class="task-intro">No matched Video Editing cases found.</p>';
    return;
  }

  container.innerHTML = rowHtml;

  const rerenderRowHeights = () => syncEditingRowVideoHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".editing-before-video, .editing-after-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!editingResizeBound) {
    window.addEventListener("resize", () => {
      syncEditingRowVideoHeights(document.getElementById("editingCaseGrid"));
    });
    editingResizeBound = true;
  }
}

const FLF2V_ROW_SIZE = 4;
let flf2vResizeBound = false;

function syncFLF2VRowMediaHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".flf2v-row");
  rowNodes.forEach((row) => {
    let targetInputHeight = 0;
    let targetImageHeight = 0;
    let targetVideoHeight = 0;

    row.querySelectorAll(".flf2v-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const videoRatio = Number(card.dataset.ratio) || 16 / 10;
      const videoNode = card.querySelector(".flf2v-video");
      const videoWidth = videoNode ? videoNode.getBoundingClientRect().width : 0;
      const renderedVideoRatio = videoNode && videoNode.videoWidth && videoNode.videoHeight
        ? videoNode.videoWidth / videoNode.videoHeight
        : videoRatio;
      if (videoWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, videoWidth / renderedVideoRatio);
      }

      card.querySelectorAll(".flf2v-thumb").forEach((imgNode) => {
        const imageWidth = imgNode.getBoundingClientRect().width;
        const imageRatio = imgNode.naturalWidth && imgNode.naturalHeight
          ? imgNode.naturalWidth / imgNode.naturalHeight
          : 16 / 10;

        if (imageWidth > 0) {
          targetImageHeight = Math.max(targetImageHeight, imageWidth / imageRatio);
        }
      });
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--flf2v-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--flf2v-row-input-height");
    }

    if (targetImageHeight > 0) {
      row.style.setProperty("--flf2v-row-image-height", `${Math.round(targetImageHeight)}px`);
    } else {
      row.style.removeProperty("--flf2v-row-image-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--flf2v-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--flf2v-row-video-height");
    }
  });
}

async function renderFLF2VCases() {
  const container = document.getElementById("flf2vCaseGrid");
  if (!container) {
    return;
  }

  const videoMap = new Map();
  flf2vSource.videoFiles.forEach((fileName) => {
    const id = parseVideoId(fileName);
    if (id && !videoMap.has(id)) {
      videoMap.set(id, fileName);
    }
  });

  const frameMap = new Map();
  flf2vSource.imageFiles.forEach((fileName) => {
    const info = parseImageInfo(fileName);
    if (!info) {
      return;
    }

    if (!frameMap.has(info.id)) {
      frameMap.set(info.id, {});
    }

    frameMap.get(info.id)[info.slot] = fileName;
  });

  const matchedIds = [...videoMap.keys()]
    .filter((id) => {
      const record = frameMap.get(id);
      return record && record[1] && record[2];
    })
    .sort((a, b) => Number(a) - Number(b));

  if (matchedIds.length === 0) {
    container.innerHTML = '<p class="task-intro">No matched FLF2V cases found.</p>';
    return;
  }

  const caseEntries = matchedIds.map((id) => {
    const videoName = videoMap.get(id);
    const frameRecord = frameMap.get(id);
    const customPrompt = getCustomCasePrompt(flf2vSource, id);

    return {
      id,
      videoName,
      prompt: customPrompt || FLF2V_PROMPT,
      firstFrame: `${flf2vSource.imageBasePath}/${frameRecord[1]}`,
      lastFrame: `${flf2vSource.imageBasePath}/${frameRecord[2]}`,
      videoPath: `${flf2vSource.videoBasePath}/${videoName}`
    };
  });

  const casesWithRatio = await Promise.all(
    caseEntries.map(async (entry) => ({
      ...entry,
      ratio: await getVideoAspectRatio(entry.videoPath)
    }))
  );

  const sortedCases = [...casesWithRatio].sort((a, b) => b.ratio - a.ratio);
  const rowGroups = [];

  for (let index = 0; index < sortedCases.length; index += FLF2V_ROW_SIZE) {
    rowGroups.push(sortedCases.slice(index, index + FLF2V_ROW_SIZE));
  }

  container.innerHTML = rowGroups
    .map((rowItems) => `
      <div class="flf2v-row">
        ${rowItems
          .map((entry) => `
            <article class="compact-case flf2v-case" data-ratio="${entry.ratio}">
              <div class="compact-input">
                <strong>Input Frames</strong>
                <div class="frame-pair flf2v-frame-pair">
                  <img class="flf2v-thumb" src="${entry.firstFrame}" alt="FLF first frame ${entry.id}" />
                  <img class="flf2v-thumb" src="${entry.lastFrame}" alt="FLF last frame ${entry.id}" />
                </div>
                <p><strong class="prompt-inline-label">Prompt:</strong> ${entry.prompt}</p>
              </div>
              <div class="compact-output">
                <video class="demo-video flf2v-video" controls muted playsinline preload="metadata" data-src="${entry.videoPath}"></video>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `)
    .join("");

  const rerenderRowHeights = () => syncFLF2VRowMediaHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".flf2v-thumb").forEach((imgNode) => {
    if (!imgNode.complete) {
      imgNode.addEventListener("load", rerenderRowHeights, { once: true });
    }
  });

  container.querySelectorAll(".flf2v-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!flf2vResizeBound) {
    window.addEventListener("resize", () => {
      syncFLF2VRowMediaHeights(document.getElementById("flf2vCaseGrid"));
    });
    flf2vResizeBound = true;
  }
}

function buildInterleavedCasesFromSource(source) {
  const videoMap = new Map();
  const imageMap = new Map();

  source.files.forEach((fileName) => {
    if (isVideoFile(fileName)) {
      const id = parseVideoId(fileName);
      if (id && !videoMap.has(id)) {
        videoMap.set(id, fileName);
      }
      return;
    }

    if (isImageFile(fileName)) {
      const info = parseInterleavedImageInfo(fileName);
      if (!info) {
        return;
      }

      if (!imageMap.has(info.id)) {
        imageMap.set(info.id, {});
      }

      imageMap.get(info.id)[info.slot] = fileName;
    }
  });

  const matchedIds = [...videoMap.keys()]
    .filter((id) => {
      const images = imageMap.get(id);
      if (!images) {
        return false;
      }

      for (let slot = 1; slot <= source.imageCount; slot += 1) {
        if (!images[slot]) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => Number(a) - Number(b));

  return matchedIds.map((id) => {
    const videoName = videoMap.get(id);
    const images = imageMap.get(id);
    const imagePaths = [];

    for (let slot = 1; slot <= source.imageCount; slot += 1) {
      imagePaths.push(`${source.basePath}/${images[slot]}`);
    }

    return {
      id,
      imageCount: source.imageCount,
      imagePaths,
      videoPath: `${source.basePath}/${videoName}`,
      customPrompt: getCustomCasePrompt(source, id)
    };
  });
}

const INTERLEAVED_ROW_SIZE = 4;
let interleavedResizeBound = false;

function syncInterleavedRowMediaHeights(container) {
  if (!container) {
    return;
  }

  const rowNodes = container.querySelectorAll(".interleaved-row");
  rowNodes.forEach((row) => {
    let targetImageHeight = 0;
    let targetVideoHeight = 0;
    let targetInputHeight = 0;

    row.querySelectorAll(".interleaved-case").forEach((card) => {
      const inputNode = card.querySelector(".compact-input");
      if (inputNode) {
        targetInputHeight = Math.max(targetInputHeight, inputNode.getBoundingClientRect().height);
      }

      const videoRatio = Number(card.dataset.ratio) || 16 / 10;
      const videoNode = card.querySelector(".interleaved-video");
      const videoWidth = videoNode ? videoNode.getBoundingClientRect().width : 0;
      const renderedVideoRatio = videoNode && videoNode.videoWidth && videoNode.videoHeight
        ? videoNode.videoWidth / videoNode.videoHeight
        : videoRatio;

      if (videoWidth > 0) {
        targetVideoHeight = Math.max(targetVideoHeight, videoWidth / renderedVideoRatio);
      }

      card.querySelectorAll(".interleaved-thumb").forEach((imgNode) => {
        const imageWidth = imgNode.getBoundingClientRect().width;
        const imageRatio = imgNode.naturalWidth && imgNode.naturalHeight
          ? imgNode.naturalWidth / imgNode.naturalHeight
          : 16 / 10;

        if (imageWidth > 0) {
          targetImageHeight = Math.max(targetImageHeight, imageWidth / imageRatio);
        }
      });
    });

    if (targetInputHeight > 0) {
      row.style.setProperty("--interleaved-row-input-height", `${Math.round(targetInputHeight)}px`);
    } else {
      row.style.removeProperty("--interleaved-row-input-height");
    }

    if (targetImageHeight > 0) {
      row.style.setProperty("--interleaved-row-image-height", `${Math.round(targetImageHeight)}px`);
    } else {
      row.style.removeProperty("--interleaved-row-image-height");
    }

    if (targetVideoHeight > 0) {
      row.style.setProperty("--interleaved-row-video-height", `${Math.round(targetVideoHeight)}px`);
    } else {
      row.style.removeProperty("--interleaved-row-video-height");
    }
  });
}

async function renderInterleavedCases() {
  const container = document.getElementById("interleavedCaseGrid");
  if (!container) {
    return;
  }

  const orderedBuckets = [];

  for (const source of interleavedSources) {
    const rawCases = buildInterleavedCasesFromSource(source);
    if (!rawCases.length) {
      continue;
    }

    const withRatio = await Promise.all(
      rawCases.map(async (entry) => ({
        ...entry,
        ratio: await getVideoAspectRatio(entry.videoPath)
      }))
    );

    const sortedWithinSource = withRatio.sort((a, b) => b.ratio - a.ratio);
    orderedBuckets.push(sortedWithinSource);
  }

  const orderedCases = orderedBuckets.flatMap((bucket, bucketIndex) => (
    bucket.map((entry, caseIndex) => ({
      ...entry,
      prompt: entry.customPrompt || buildInterleavedPrompt(entry.imageCount, caseIndex + bucketIndex)
    }))
  ));

  if (orderedCases.length === 0) {
    container.innerHTML = '<p class="task-intro">No matched Interleaved cases found.</p>';
    return;
  }

  const rowGroups = [];
  for (let index = 0; index < orderedCases.length; index += INTERLEAVED_ROW_SIZE) {
    rowGroups.push(orderedCases.slice(index, index + INTERLEAVED_ROW_SIZE));
  }

  container.innerHTML = rowGroups
    .map((rowItems) => `
      <div class="interleaved-row">
        ${rowItems
          .map((entry) => `
            <article class="compact-case interleaved-case" data-ratio="${entry.ratio}">
              <div class="compact-input">
                <strong>Input Images</strong>
                <div class="interleaved-image-row count-${Math.min(entry.imageCount, 4)}">
                  ${entry.imagePaths.map((imgPath, idx) => `<img class="interleaved-thumb" src="${imgPath}" alt="Interleaved input ${entry.id}-${idx + 1}" />`).join("")}
                </div>
                <p><strong class="prompt-inline-label">Prompt:</strong> ${entry.prompt}</p>
              </div>
              <div class="compact-output">
                <video class="demo-video interleaved-video" controls muted playsinline preload="metadata" data-src="${entry.videoPath}"></video>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `)
    .join("");

  const rerenderRowHeights = () => syncInterleavedRowMediaHeights(container);
  requestAnimationFrame(rerenderRowHeights);
  setTimeout(rerenderRowHeights, 80);

  container.querySelectorAll(".interleaved-thumb").forEach((imgNode) => {
    if (!imgNode.complete) {
      imgNode.addEventListener("load", rerenderRowHeights, { once: true });
    }
  });

  container.querySelectorAll(".interleaved-video").forEach((videoNode) => {
    videoNode.addEventListener("loadedmetadata", rerenderRowHeights, { once: true });
  });

  if (!interleavedResizeBound) {
    window.addEventListener("resize", () => {
      syncInterleavedRowMediaHeights(document.getElementById("interleavedCaseGrid"));
    });
    interleavedResizeBound = true;
  }
}

function attachVideoFallback(video) {
  const preferred = video.dataset.src || PLACEHOLDER;
  const expectedName = preferred.split("/").pop() || "video.mp4";

  const markFallback = () => {
    if (!video.dataset.fallbackMarked) {
      const badge = document.createElement("div");
      badge.textContent = `placeholder · missing ${expectedName}`;
      badge.style.cssText = [
        "position:absolute",
        "left:10px",
        "bottom:10px",
        "padding:4px 8px",
        "font-size:12px",
        "border-radius:999px",
        "color:#fff",
        "background:rgba(220, 38, 38, 0.78)",
        "border:1px solid rgba(252,165,165,0.65)",
        "z-index:2"
      ].join(";");

      const parent = video.parentElement;
      parent.style.position = "relative";
      parent.appendChild(badge);
      video.dataset.fallbackMarked = "1";
    }
  };

  video.addEventListener("error", () => {
    const current = video.getAttribute("src");
    if (current !== PLACEHOLDER) {
      video.setAttribute("src", PLACEHOLDER);
      video.load();
      markFallback();
    }
  });

  video.setAttribute("src", preferred);
}

async function initPage() {
  await Promise.all([
    renderT2VCases(),
    renderI2VCases(),
    renderFLF2VCases(),
    renderEditingCases(),
    renderInterleavedCases(),
    renderTIV2VCases()
  ]);
  document.querySelectorAll("video.demo-video").forEach(attachVideoFallback);
}

initPage();
