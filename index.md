---
layout: default
---

<script type="text/javascript" src="header.js"></script>


Welcome to the Image Analysis for CTA Endovascular Stroke Therapy (IACTA-EST) Data Challenge! A date challenge part of the [2023 IEEE International Symposium on Biomedical Imaging (ISBI)](http://2023.biomedicalimaging.org/en/CHALLENGES.html). 

<span style="color:red">- 15 Mar 2023 - Phase 2 has started! Please, download the final datasets [here](./leaderboard) and submit your final results</span> <br />

<span style="color:red"> - 15 Jan 2023 - Phase 1 has started! Please, register your team [here](./leaderboard) and wait for the activation email to start the challenge</span>
# Introduction

Large vessel occlusion (LVO) denotes the obstruction of large, proximal cerebral arteries and accounts for 24–46% of acute ischemic stroke (AIS). Due to the involvement of proximal vasculature, significant brain regions are often affected, resulting in large neurological deficits. Brain CT-Angiography (CTA) is an imaging modality available in the vast majority of hospitals 24/7, which is typically used to identify LVO. A quick identification is essential to enable endovascular stroke therapy (EST), a life-saving treatment. EST is a procedure that mechanically removes the clot from the brain blood vessel causing the LVO by mechanical means with a stent. To facilitate this, automated imaging-based tools to detect LVO have been shown to reduce the time for EST, leading to better clinical outcomes. While commercial solutions have recently addressed this medical image computing application, no comparative tests on a common dataset have been performed. We aim to bridge this gap with the first task of the Image Analysis for CTA Endovascular Stroke Therapy (IACTA-EST) Data Challenge by providing a curated imaging dataset from multiple clinical sites with evaluation metrics. 

Additionally, the IACTA-EST challenge evaluates the participants’ ability to predict the success of EST by combining CTA and clinical variables, addressing an unmet medical need. Currently, the main metrics to undergo an EST is the size of the stroke. However, it is not clear how well this data combination, which is widely available in stroke centers, and advanced medical image computing predictive models will be able to predict the success of clot retrieval in EST during the first pass. 

These two tasks enable participants to start working on brain CTA, a modality rarely available in public datasets, combining imaging and clinical variables and addressing critical medical needs in stroke care. 

## Data and Challenge

This challenge is divided into two tasks: (1) LVO detection and (2) Brain Reperfusion Prediction. The data is sourced in accordance with the guidelines from the Helsinki Declaration and under IRB HSC-MS-19-0630 approved by the University of Texas Health Science Center (UTHealth) IRB and Memorial Hermann Hospital, which allows data sharing without any Protected Health Information (PHI) for non-commercial scientific purposes, license CC BY-NC-ND 4.0. All data have been retrieved from Stroke centers in Houston, TX, USA, as part of a federally funded grant (R01NS121154) and a UTHealth Learning Healthcare grant. 

For the first challenge, LVO detection, the data include a training+validation set released to the participants in the first phase of the challenge, and another test set which is released during the second phase.  Each subject has a single CTA image acquired during the acute stroke phase prior to any EST, and it will include stroke mimics, ischemic stroke subjects without LVO, and ischemic stroke subjects with LVO. CTA images will be released to the participants after undergoing a preprocessing pipeline involving resampling to a common image template, rigid registration, and skull-stripping. LVO labels are manually extracted from the stroke centers' neuroradiologist reports. An LVO will be defined as an occlusion in the ICA, M1, M2, or A1 brain vasculature. High-grade stenosis or near-complete occlusions will not be considered LVOs. Posterior circulation stroke and LVO in other segments are excluded. The class distribution for this classification task is not chosen according to the real-world distribution that a primary care hospital might see, as otherwise, we would have to include order of magnitude more controls. 

For the second challenge, Brain Reperfusion Prediction, the data contains subjects with LVO separate from the ones used for the first task. The dataset for the training+validation is released to the participants in the first phase of the challenge and another test set is be released during the second phase.  In addition to the CTA images, we provide additional clinical variables. Not all subjects have the full clinical variables, so strategies to deal with missing data are required.  The participants are encouraged to use transfer learning or other strategies that would allow leveraging the model learned for LVO detection for this task. The label used will be the success of clot retrieval in the first pass with complete revascularization of the large vessel occlusion and its downstream territory.

More information about the data is available [here](data-info). 

### Evaluation

 In the first phase, we release only the training and validation set and display the ranking on the leaderboard based on the performance on the validation set. Then, in the second phase, we release the test data and display the participants' ranking based on the hidden labels of the test set. 

Participants will be allowed 3 submissions per day in the first phase, and only the best run will be officially counted towards placement in the leaderboard. In the second testing phase, only two submissions in total will be allowed (exceptions will be considered in case of obvious technical issues). So, The teams will need to make sure The invited teams must submit a paper in appropriate ISBI style to the organizers explaining their algorithm.

External datasets used for training are allowed as long as they are publicly available and clearly described.

The final scores will be given independently for the two tasks. In both cases, they will be based on Area under the curve (AUC) and Average precision score (mAP) as: Final score = 0.5*AUC + 0.5*mAP.

More information about the format of the submission is available [here](data-info). 

### Team Registration
The team can register at the Submission and Leaderboard page by submitting a request with a valid email address. The organizers will manually activate the account and the participants will receive a confirmation email. 

## Important Dates
- 15 Jan 2023: Phase 1. Data Released and registration/submissions system open for evaluation of results. 
- 15 Mar 2023: Phase 2. Test set released. Segmentation results of this phase can only be submitted twice (only best results will be considered).
- 20 Mar 2023: Submission closed. Final off-site leaderboard update. Top teams will be notified for the participation to the meeting at ISBI 2023. 
- 18 April 2023: Finalist presentations at ISBI 2023.

## Other Information

The top-performing participating teams and individuals (based on the performance of their method) will be invited to contribute to a joint journal paper describing and summarizing the methods used, and the results found during the challenge. 

For more information, please contact us at: iacta-est AT uth.tmc.edu 

## Organizers
Samiksha Pachade, PhD, School of Biomedical Informatics (SBMI), University of Texas Health Science Center at Houston (UTHealth), TX, USA; Sergio Salazar-Marioni, MD, McGovern Medical School, UTHealth, TX, USA; Ivan Coronado, MSc, SBMI, UTHealth, TX, USA; Shayan Shams, PhD, Department of Applied Data Science at the San Jose State University, CA, USA; Fabien Scalzo, PhD, Seaver College, Pepperdine University, CA, USA; Sunil Sheth, MD, McGovern Medical School, University of Texas Health Science Center at Houston (UTHealth), TX, USA; Luca Giancardo, PhD SBMI, UTHealth, TX, USA. Special thanks to Xiaoqian Jiang, PhD, SBMI and Luyao Chen, MSc, SBMI for platform development. Also, special thanks to Uma Lal-Trehan Estrada, MSc and Yingjun Dong, PhD for additional data quality assessment. 
