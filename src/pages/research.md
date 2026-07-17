---
layout: ../layouts/MarkdownLayout.astro
title: Research
eyebrow: Scientific focus
description: I build reliable AI systems for scientific prediction and decision support. My research spans physics-informed machine learning, surrogate models for partial differential equations, sparse sensing and field reconstruction, and the verification and evaluation of AI models so they can be trusted for real decisions.
---

The common thread across my work is complex spatio-temporal systems where physics matters, observations are incomplete, and predictions need to hold up outside a controlled demonstration.

## Scientific models that earn trust

Many scientific problems are governed by well-understood physical principles but remain expensive to simulate at the resolution or speed that practical decisions require. I develop machine-learning methods that work with this structure rather than ignoring it. That includes incorporating physical constraints into learned models, representing high-dimensional dynamics in reduced spaces, and building surrogates for systems described by partial differential equations.

Efficiency alone is not enough. A model can produce a convincing prediction while being unstable, poorly calibrated, or unreliable outside its training distribution. A central part of my work is therefore verification: understanding how scientific AI models fail, evaluating whether they preserve the behavior that matters, and making uncertainty visible. I am interested in models that are accurate, but also stable, interpretable, and defensible.

## From incomplete observations to useful predictions

The real world rarely provides a clean, fully observed state. Sensors are sparse, measurements are noisy, and data may be severely imbalanced or collected across different instruments and scales. I work on methods that reconstruct physical fields and evolving systems from limited observations, connecting what can be measured to what scientists and decision-makers need to know.

This perspective has taken my work across fluid dynamics, geophysical hazards, earth systems, nuclear physics, and biomedical flows. I do not see these as disconnected application areas. They share mathematical and practical challenges: multiscale dynamics, limited data, expensive simulation, and the need to distinguish a useful prediction from a merely plausible one. Moving between domains helps me identify methods that generalize—and assumptions that do not.

<figure class="research-figure">
  <img src="/images/research/senseiver-tsunami-framework.png" width="1162" height="371" loading="lazy" alt="Senseiver sparse-sensing framework: wave-height measurements from a small network of tsunameters and their encoded positions enter an attention-based encoder; a decoder combines the resulting latent representation with query locations to reconstruct wave height across the ocean domain." />
  <figcaption>
    <strong>Sparse-to-dense reconstruction for tsunami forecasting.</strong> The Senseiver uses wave-height measurements from a small set of tsunameters, together with sensor positions and ocean bathymetry, to form a compact latent representation. An attention-based decoder then evaluates that representation at arbitrary query locations, producing a high-resolution estimate of the tsunami wavefield and virtual measurements where no physical sensor is present. The study evaluates this framework as a proof of concept under sparse, realistic sensor configurations and previously unseen epicenter locations.
    <cite>Figure 2 from McDugald, E., Mohan, A., Engwirda, D., Marcato, A., &amp; Santos, J. E. (2025), “Attention-Based Reconstruction of Full-Field Tsunami Waves From Sparse Tsunameter Networks,” <em>Geophysical Research Letters</em>, 52, e2025GL115345. <a href="https://doi.org/10.1029/2025GL115345">https://doi.org/10.1029/2025GL115345</a></cite>
  </figcaption>
</figure>

<figure class="research-figure research-figure--tall">
  <img src="/images/research/senseiver-tsunami-reconstruction.png" width="940" height="1357" loading="lazy" alt="Two tsunami reconstruction examples. For each example, maps compare the simulated wavefield, the Senseiver prediction, and absolute spatial error at three times. Adjacent plots compare true and predicted wave-height time series at unobserved locations and show the spatially averaged reconstruction error over time." />
  <figcaption>
    <strong>Reconstructing wavefields and virtual sensor measurements.</strong> Two test cases compare the simulated tsunami wavefield with the Senseiver reconstruction at successive times; the third map in each row shows the absolute spatial error. Yellow triangles mark the sparse observation network, while the circled locations are treated as virtual sensors. The accompanying time series compare predicted and true wave heights at those unobserved locations, and the lower plots track the domain-averaged reconstruction error as the wave evolves. Together, these views show both what the model recovers from sparse measurements and where its errors remain in space and time.
    <cite>Figure 3 from McDugald, E., Mohan, A., Engwirda, D., Marcato, A., &amp; Santos, J. E. (2025), “Attention-Based Reconstruction of Full-Field Tsunami Waves From Sparse Tsunameter Networks,” <em>Geophysical Research Letters</em>, 52, e2025GL115345. <a href="https://doi.org/10.1029/2025GL115345">https://doi.org/10.1029/2025GL115345</a></cite>
  </figcaption>
</figure>

## Disaster resilience as an integrating focus

I care about a broad range of scientific applications, but disaster science is a primary focus of mine. It brings the technical questions above into a setting where uncertainty, timeliness, and accessibility have direct consequences. I am especially interested in cascading infrastructure failures, impact-based early warning, and hazards such as wildfires, permafrost melt and tsunamis, and ways to make rigorous hazard analysis more available to the people responsible for protecting communities.

<figure class="video-feature">
  <div>
    <iframe src="https://www.youtube-nocookie.com/embed/wODkRx0fdfc" title="Bridging Nerdville and Fieldville — Arvind Mohan at CNG 2025" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption><strong>Bridging “Nerdville” and “Fieldville.”</strong> A lightning talk at CNG 2025 about closing the gap between scientific AI research and disaster practice.</figcaption>
</figure>

What makes disaster science especially compelling to me is that the gap between academic capability and operational usefulness is not merely an engineering problem. It cannot be closed simply by placing a better interface around an existing model. The scientific questions themselves often need to be reformulated around how hazards unfold, what information is available in time, how decisions are made under uncertainty, and which consequences matter in a particular community. Bridging research and practice therefore requires us to rethink—and often re-research—the entire problem, from its initial formulation to the way evidence is communicated and used.

I believe this gap is where some of the most consequential work remains to be done. My aim is to help build a stronger bridge between academic science and disaster practice, so that new methods are developed with operational realities in view from the beginning. This perspective is grounded in ongoing, largely pro bono work with emergency managers and disaster-response organizations at federal, state, and local levels. Those relationships help me identify research questions that matter operationally, and I welcome collaborators who want to help close the gap between academic science and disaster practice.

The selected publication list is available on the [publications page](/publications/) and the complete record is on [Google Scholar](https://scholar.google.com/citations?user=kr8XW9oAAAAJ).
