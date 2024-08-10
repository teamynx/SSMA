document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const missionName = urlParams.get('name');
    const missionDate = urlParams.get('date');
    const failureCause = urlParams.get('failureCause');
    const precautions = urlParams.get('precautions');
    const description = urlParams.get('description');

    document.getElementById('mission-name').textContent = missionName;
    document.getElementById('mission-date').textContent = missionDate;
    document.getElementById('failure-cause').textContent = failureCause;
    document.getElementById('precautions').textContent = precautions;
    document.getElementById('mission-description').textContent = description || 'No description available.';
});
