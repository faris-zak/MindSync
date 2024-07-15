const userGuideSection = document.getElementById('userGuideSection');
const userGuideSectionTitle = document.getElementById('userGuideSectionTitle');
const userGuideSectionBody = document.getElementById('userGuideSectionBody');
const iconSectionList = document.getElementById('iconSectionList');
const userGuideLine = document.getElementById('userGuideLine');
const downIcon = document.getElementById('downIcon');

function showHideDiv(){
    if(
       userGuideLine.style.display == 'block' &&
       iconSectionList.style.opacity == '1' &&
       iconSectionList.style.display == 'block' &&
       userGuideSectionBody.style.display == 'block'){

        downIcon.style.opacity = '1';
        userGuideLine.style.display = 'none';
        iconSectionList.style.opacity = '0';
        iconSectionList.style.display = 'none';
        userGuideSectionBody.style.display = 'none';

    } else{
        downIcon.style.opacity = '0';
        userGuideLine.style.display = 'block';
        iconSectionList.style.opacity = '1';
        iconSectionList.style.display = 'block';
        userGuideSectionBody.style.display = 'block';
    }
};