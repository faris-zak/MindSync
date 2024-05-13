const userGuideSection = document.getElementById('userGuideSection');
const userGuideSectionTitle = document.getElementById('userGuideSectionTitle');
const userGuideSectionBody = document.getElementById('userGuideSectionBody');
const iconSectionList = document.getElementById('iconSectionList');
const userGuideLine = document.getElementById('userGuideLine');

function showhideDiv(){
    if(userGuideSectionTitle.style.marginBottom === '0px' &&
       userGuideLine.style.opacity === '0' &&
       userGuideLine.style.display === 'none' &&
       iconSectionList.style.opacity === '0' &&
       iconSectionList.style.display === 'none'){

        userGuideSectionTitle.style.marginBottom = '20px';
        userGuideLine.style.opacity = '1';
        userGuideLine.style.display = 'block';
        iconSectionList.style.opacity = '1';
        iconSectionList.style.display = 'block';
    } else{
        userGuideSectionTitle.style.marginBottom = '0px';
        userGuideLine.style.opacity = '0';
        userGuideLine.style.display = 'none';
        iconSectionList.style.opacity = '0';
        iconSectionList.style.display = 'none';
    }
};